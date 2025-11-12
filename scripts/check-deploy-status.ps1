# Git, GitHub, Vercel 배포 상태 확인 스크립트

Write-Host "=== 배포 상태 확인 ===" -ForegroundColor Cyan
Write-Host ""

# 1. Git 상태 확인
Write-Host "1. Git 상태 확인..." -ForegroundColor Yellow
$gitStatus = git status --short
if ($gitStatus) {
    Write-Host "   ⚠️  커밋되지 않은 변경사항이 있습니다:" -ForegroundColor Red
    $gitStatus | ForEach-Object { Write-Host "      $_" -ForegroundColor Red }
} else {
    Write-Host "   ✅ 작업 디렉토리가 깨끗합니다" -ForegroundColor Green
}

# 2. 로컬과 원격 브랜치 동기화 확인
Write-Host "`n2. 원격 저장소 동기화 확인..." -ForegroundColor Yellow
git fetch origin --quiet
$localCommit = git rev-parse HEAD
$remoteCommit = git rev-parse origin/main 2>$null

if ($remoteCommit) {
    if ($localCommit -eq $remoteCommit) {
        Write-Host "   ✅ 로컬과 원격이 동기화되어 있습니다" -ForegroundColor Green
    } else {
        $ahead = (git rev-list --count origin/main..HEAD)
        $behind = (git rev-list --count HEAD..origin/main)
        if ($ahead -gt 0) {
            Write-Host "   ⚠️  로컬이 원격보다 $ahead 커밋 앞서 있습니다 (푸시 필요)" -ForegroundColor Yellow
        }
        if ($behind -gt 0) {
            Write-Host "   ⚠️  로컬이 원격보다 $behind 커밋 뒤처져 있습니다 (풀 필요)" -ForegroundColor Yellow
        }
    }
} else {
    Write-Host "   ⚠️  원격 브랜치를 찾을 수 없습니다" -ForegroundColor Red
}

# 3. 최근 커밋 확인
Write-Host "`n3. 최근 커밋 확인..." -ForegroundColor Yellow
$recentCommits = git log --oneline -5
if ($recentCommits) {
    Write-Host "   최근 5개 커밋:" -ForegroundColor Cyan
    $recentCommits | ForEach-Object { Write-Host "      $_" }
} else {
    Write-Host "   ⚠️  커밋이 없습니다" -ForegroundColor Red
}

# 4. 빌드 가능 여부 확인
Write-Host "`n4. 빌드 가능 여부 확인..." -ForegroundColor Yellow
if (Test-Path "package.json") {
    Write-Host "   ✅ package.json 존재" -ForegroundColor Green
} else {
    Write-Host "   ❌ package.json이 없습니다" -ForegroundColor Red
}

# 5. 필수 파일 확인
Write-Host "`n5. 필수 파일 확인..." -ForegroundColor Yellow
$requiredFiles = @(
    "app/page.tsx",
    "components/Header.tsx",
    "components/Hero.tsx",
    "components/Footer.tsx"
)

$allExist = $true
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "   ✅ $file" -ForegroundColor Green
    } else {
        Write-Host "   ❌ $file (누락)" -ForegroundColor Red
        $allExist = $false
    }
}

Write-Host "`n=== 확인 완료 ===" -ForegroundColor Cyan

