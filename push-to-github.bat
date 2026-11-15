@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo ========================================================
echo        AQMedTech Innovations - Push to GitHub
echo ========================================================
echo.

REM 1. Ensure index.html contains the complete standalone application
echo [*] Syncing full application to index.html for GitHub Pages...
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
git commit -m "fix: make index.html self-contained for GitHub Pages direct launch"

echo.
echo [*] Pushing to GitHub...
git push origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo  [SUCCESS] Pushed to GitHub successfully!
    echo  Your site will be live at:
    echo  https://aqmedtech.github.io/aqmedtech/
    echo  (Allow 60-90 seconds for GitHub Pages to refresh)
    echo ========================================================
) else (
    echo.
    echo [!] Push encountered an issue. Trying with credentials helper...
    git push -u origin main
)

echo.
pause
