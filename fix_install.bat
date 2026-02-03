@echo off
echo ==========================================
echo      CLEANING UP PROJECT DEPENDENCIES
echo ==========================================
echo.

echo [1/3] Removing old node_modules...
rd /s /q node_modules
del /q package-lock.json

echo [2/3] Cleaning npm cache...
call npm cache clean --force

echo [3/3] Installing dependencies...
call npm install

echo.
echo ==========================================
echo           INSTALLATION COMPLETE
echo ==========================================
echo.
echo Now try running: npm run dev
pause
