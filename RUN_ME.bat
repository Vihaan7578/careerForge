@echo off
title AI Resume Builder - Dev Server
color 0A
echo.
echo ================================================
echo    AI RESUME BUILDER - Starting Dev Server
echo ================================================
echo.
echo Please wait while the server starts...
echo.
echo Once you see "Local: http://localhost:5173"
echo Your browser should open automatically!
echo.
echo ================================================
echo.

cd /d "%~dp0"
npm run dev

echo.
echo ================================================
echo Server stopped. Press any key to exit.
echo ================================================
pause


