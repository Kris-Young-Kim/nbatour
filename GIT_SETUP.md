# Git 설치 및 설정 가이드

## 문제 상황

현재 시스템에 Git이 설치되어 있지 않아 Git 명령어를 실행할 수 없습니다.

## 해결 방법

### 방법 1: Git for Windows 설치 (권장)

1. **Git 다운로드**
   - 공식 사이트: https://git-scm.com/download/win
   - 또는: https://github.com/git-for-windows/git/releases

2. **설치 과정**
   - 다운로드한 설치 파일 실행
   - 기본 설정으로 설치 진행 (Next 버튼 클릭)
   - 설치 완료 후 PowerShell 재시작

3. **설치 확인**
   ```powershell
   git --version
   ```

4. **Git 설정 (최초 1회)**
   ```powershell
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

### 방법 2: Winget 사용 (Windows 10/11)

```powershell
# Winget으로 Git 설치
winget install --id Git.Git -e --source winget
```

### 방법 3: Chocolatey 사용

```powershell
# Chocolatey로 Git 설치
choco install git
```

## Git 설치 후 실행할 명령어

Git 설치가 완료되면 다음 명령어를 순서대로 실행하세요:

```powershell
# 프로젝트 디렉토리로 이동
cd d:\firstmover\nbatour_mintour

# Git 저장소 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "first commit"

# main 브랜치로 변경
git branch -M main

# 원격 저장소 추가
git remote add origin https://github.com/Kris-Young-Kim/nbatour.git

# 원격 저장소에 푸시
git push -u origin main
```

## 참고사항

- Git 설치 후 PowerShell을 재시작해야 PATH가 업데이트됩니다.
- GitHub에 푸시하기 전에 GitHub 계정 인증이 필요할 수 있습니다.
  - Personal Access Token 사용
  - 또는 GitHub Desktop 사용

## 문제 해결

### Git 명령어를 찾을 수 없는 경우

1. PowerShell 재시작
2. Git 설치 경로 확인: `C:\Program Files\Git\bin\git.exe`
3. PATH 환경 변수에 Git 경로가 포함되어 있는지 확인

### GitHub 인증 문제

GitHub에 푸시할 때 인증이 필요한 경우:

1. **Personal Access Token 사용**
   - GitHub Settings → Developer settings → Personal access tokens
   - 토큰 생성 후 비밀번호 대신 사용

2. **GitHub Desktop 사용**
   - GitHub Desktop 설치: https://desktop.github.com/
   - GUI로 쉽게 관리 가능

