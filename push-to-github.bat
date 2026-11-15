@echo off
setlocal enabledelayedexpansion
cd /d "C:\Users\HomePC\.gemini\antigravity\scratch\aqmedtech"

echo ========================================================
echo        AQMedTech Innovations - Push to GitHub
echo ========================================================
echo.

REM Initialize git if needed
if not exist ".git" (
    echo [*] Initializing Git repository...
    git init -b main
) else (
    git branch -M main
)

git config user.name "AQmedtech"
git config user.email "abdullahiabdulqaharak@gmail.com"

echo [*] Staging all project files...
git add .

echo [*] Committing changes...
git commit -m "feat: complete AQMedTech platform with portfolio, marketplace, news hub and admin studio"

echo.
set REPO_NAME=aqmedtech
set /p USER_REPO="Enter repository name on GitHub [default: aqmedtech]: "
if not "!USER_REPO!"=="" set REPO_NAME=!USER_REPO!

REM Check if remote origin exists
git remote remove origin 2>nul
git remote add origin https://github.com/AQmedtech/!REPO_NAME!.git

echo.
echo [*] Pushing to https://github.com/AQmedtech/!REPO_NAME!.git ...
echo (If the repository does not exist yet on GitHub, please create it at https://github.com/new first)
echo.

git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo  [SUCCESS] Successfully pushed to GitHub!
    echo  View it at: https://github.com/AQmedtech/!REPO_NAME!
    echo ========================================================
) else (
    echo.
    echo [!] Push failed. 
    echo Please ensure:
    echo 1. You created a repository named '!REPO_NAME!' on https://github.com/new
    echo 2. Your GitHub account has permission to push.
)

echo.
pause
