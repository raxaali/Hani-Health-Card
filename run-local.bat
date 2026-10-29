@echo off
cd /d "%~dp0"
echo Hani Health prototype is starting at http://localhost:8000
python -m http.server 8000
pause
