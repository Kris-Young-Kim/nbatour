# Git 초기화 PowerShell 스크립트

Write-Host "Git 저장소 초기화 중..." -ForegroundColor Green
git init

Write-Host "파일 추가 중..." -ForegroundColor Green
git add .

Write-Host "첫 커밋 생성 중..." -ForegroundColor Green
git commit -m "first commit"

Write-Host "main 브랜치로 변경 중..." -ForegroundColor Green
git branch -M main

Write-Host "원격 저장소 추가 중..." -ForegroundColor Green
git remote add origin https://github.com/Kris-Young-Kim/nbatour.git

Write-Host "원격 저장소에 푸시 중..." -ForegroundColor Green
git push -u origin main

Write-Host "완료!" -ForegroundColor Green

