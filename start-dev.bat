@echo off
echo Iniciando servidor de desarrollo de Waynox Landing...
echo.
echo Asegurandose de que las dependencias esten instaladas...
call yarn install
echo.
echo Iniciando servidor en http://localhost:3000
echo Presiona Ctrl+C para detener el servidor
echo.
call yarn dev
pause
