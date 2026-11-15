@echo off
title AQMedTech Innovations Web Server
echo ========================================================
echo   AQMedTech Innovations - Web Dev, Health-Tech, Ads
echo ========================================================
echo.
echo Launching local server at http://localhost:3000 ...
echo.

start http://localhost:3000

REM Try npx serve first, fallback to python http.server
where npx >nul 2>nul
if %ERRORLEVEL% EQU 0 (
  npx -y serve . -l 3000
) else (
  where python >nul 2>nul
  if %ERRORLEVEL% EQU 0 (
    python -m http.server 3000
  ) else (
    echo Neither npx nor python found in PATH.
    echo Opening standalone app directly in your default browser...
    start standalone.html
    pause
  )
)
