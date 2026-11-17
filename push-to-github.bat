@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo ========================================================
echo        AQMedTech Innovations - Push to GitHub
echo ========================================================
echo.

REM 1. Ensure index.html contains the complete standalone application
echo [*] Syncing standalone.html to index.html...
copy /Y "standalone.html" "index.html" >nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] index.html updated successfully with complete application!
) else (
    echo [!] Warning: Could not copy standalone.html.
)

REM 2. Git Setup & Configuration
if not exist ".git" (
    echo [*] Initializing Git repository...
    git init -b main
) else (
    git branch -M main
)

git config user.name "AQmedtech"
git config user.email "abdullahiabdulqaharak@gmail.com"

echo [*] Staging all files...
git add .

echo [*] Committing changes...
git commit -m "feat: set primary WhatsApp contact to 08106440538 with 1-click direct chat"

echo.
echo [*] Pushing to GitHub...
git push origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo  [SUCCESS] Pushed to GitHub successfully!
    echo ========================================================
) else (
    echo.
    echo [!] Pushing with credentials helper...
    git push -u origin main
)

echo.
pause
