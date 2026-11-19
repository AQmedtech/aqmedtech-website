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
git remote set-url origin https://github.com/AQmedtech/aqmedtech-website.git 2>nul || git remote add origin https://github.com/AQmedtech/aqmedtech-website.git

echo [*] Staging all files...
git add .

echo [*] Committing changes...
git commit -m "feat: database-ready schema with client-side image compression, seller locations, and WhatsApp lead routing"

echo.
echo [*] Pushing to GitHub (aqmedtech-website)...
git push origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo  [SUCCESS] Pushed to GitHub successfully!
    echo  Your site is live at:
    echo  https://aqmedtech.github.io/aqmedtech-website/
    echo ========================================================
) else (
    echo.
    echo [!] Pushing with credentials helper...
    git push -u origin main
)

echo.
pause
