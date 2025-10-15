@echo off
echo.
echo ========================================
echo   AI Resume Builder - Status Check
echo ========================================
echo.

echo Checking if server is running...
echo.

netstat -ano | findstr :5173
if %errorlevel% == 0 (
    echo.
    echo ✅ Server is running on port 5173!
    echo.
    echo Open your browser to: http://localhost:5173
    echo.
) else (
    echo.
    echo ❌ Server not running on port 5173
    echo.
    echo Starting server now...
    echo.
    npm run dev
)

echo.
echo ========================================
pause
