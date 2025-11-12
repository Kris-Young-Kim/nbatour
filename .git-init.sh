#!/bin/bash
# Git 초기화 스크립트

echo "Git 저장소 초기화 중..."
git init

echo "파일 추가 중..."
git add .

echo "첫 커밋 생성 중..."
git commit -m "first commit"

echo "main 브랜치로 변경 중..."
git branch -M main

echo "원격 저장소 추가 중..."
git remote add origin https://github.com/Kris-Young-Kim/nbatour.git

echo "원격 저장소에 푸시 중..."
git push -u origin main

echo "완료!"

