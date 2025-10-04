@echo off
echo ========================================
echo   LIMPEZA COMPLETA DE CACHE - VITE
echo ========================================
echo.

echo [1/4] Parando processos Node...
taskkill /F /IM node.exe 2>nul
timeout /t 2 >nul

echo [2/4] Removendo cache do Vite...
if exist "node_modules\.vite" (
    rmdir /s /q "node_modules\.vite"
    echo Cache do Vite removido!
) else (
    echo Cache do Vite nao encontrado.
)

echo [3/4] Limpando arquivos temporarios...
if exist "dist" (
    rmdir /s /q "dist"
    echo Pasta dist removida!
)

echo.
echo ========================================
echo   IMPORTANTE: LIMPE O CACHE DO NAVEGADOR
echo ========================================
echo   1. Abra DevTools (F12)
echo   2. Va em Application ^> Service Workers
echo   3. Clique em "Unregister" em todos
echo   4. Feche e abra o navegador novamente
echo ========================================
echo.
pause

echo [4/4] Iniciando servidor...
echo.
echo ========================================
echo   INICIANDO npm run dev
echo ========================================
echo.
npm run dev
