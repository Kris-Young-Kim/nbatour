# 자동 배포 스크립트 - Git 커밋, 푸시, 상태 확인을 한 번에

param(
    [string]$Message = "",
    [switch]$SkipBuild = $false,
    [switch]$SkipPush = $false
)

Write-Host "=== 자동 배포 시작 ===" -ForegroundColor Cyan
Write-Host ""

# 커밋 메시지 확인
if ([string]::IsNullOrWhiteSpace($Message)) {
    $Message = Read-Host "커밋 메시지를 입력하세요"
    if ([string]::IsNullOrWhiteSpace($Message)) {
        Write-Host "❌ 커밋 메시지가 필요합니다" -ForegroundColor Red
        exit 1
    }
}

# 1. 변경사항 확인
Write-Host "1. 변경사항 확인..." -ForegroundColor Yellow
$changes = git status --short
if (-not $changes) {
    Write-Host "   ℹ️  커밋할 변경사항이 없습니다" -ForegroundColor Gray
    if (-not $SkipPush) {
        Write-Host "`n원격 저장소 동기화 확인 중..." -ForegroundColor Yellow
        git fetch origin --quiet
        $localCommit = git rev-parse HEAD
        $remoteCommit = git rev-parse origin/main 2>$null
        if ($remoteCommit -and $localCommit -ne $remoteCommit) {
            $ahead = (git rev-list --count origin/main..HEAD)
            if ($ahead -gt 0) {
                Write-Host "   푸시할 커밋이 있습니다. 푸시를 진행합니다..." -ForegroundColor Yellow
                git push origin main
            }
        }
    }
    exit 0
}

Write-Host "   변경된 파일:" -ForegroundColor Cyan
$changes | ForEach-Object { Write-Host "      $_" }

# 2. 빌드 테스트 (선택적)
if (-not $SkipBuild) {
    Write-Host "`n2. 빌드 테스트 실행..." -ForegroundColor Yellow
    $buildResult = pnpm build 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host "   ❌ 빌드 실패!" -ForegroundColor Red
        Write-Host $buildResult
        $continue = Read-Host "그래도 커밋하시겠습니까? (y/N)"
        if ($continue -ne "y" -and $continue -ne "Y") {
            exit 1
        }
    } else {
        Write-Host "   ✅ 빌드 성공" -ForegroundColor Green
    }
}

# 3. 모든 변경사항 스테이징
Write-Host "`n3. 변경사항 스테이징..." -ForegroundColor Yellow
git add .
Write-Host "   ✅ 스테이징 완료" -ForegroundColor Green

# 4. 커밋
Write-Host "`n4. 커밋 생성..." -ForegroundColor Yellow
git commit -m $Message
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ❌ 커밋 실패" -ForegroundColor Red
    exit 1
}
Write-Host "   ✅ 커밋 완료: $Message" -ForegroundColor Green

# 5. 푸시 (선택적)
if (-not $SkipPush) {
    Write-Host "`n5. 원격 저장소에 푸시..." -ForegroundColor Yellow
    git push origin main
    if ($LASTEXITCODE -ne 0) {
        Write-Host "   ❌ 푸시 실패" -ForegroundColor Red
        exit 1
    }
    Write-Host "   ✅ 푸시 완료" -ForegroundColor Green
    Write-Host "`n   Vercel이 자동으로 배포를 시작합니다" -ForegroundColor Cyan
} else {
    Write-Host "`n5. 푸시 건너뛰기 (--SkipPush 옵션)" -ForegroundColor Gray
}

# 6. 최종 상태 확인
Write-Host "`n6. 최종 상태 확인..." -ForegroundColor Yellow
git fetch origin --quiet
$localCommit = git rev-parse HEAD
$remoteCommit = git rev-parse origin/main 2>$null

if ($remoteCommit -and $localCommit -eq $remoteCommit) {
    Write-Host "   ✅ 로컬과 원격이 동기화되었습니다" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  동기화 확인 필요" -ForegroundColor Yellow
}

Write-Host "`n=== 배포 완료 ===" -ForegroundColor Green
Write-Host "`n최근 커밋:" -ForegroundColor Cyan
git log --oneline -3

