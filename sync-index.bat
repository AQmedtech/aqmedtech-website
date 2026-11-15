@echo off
cd /d "%~dp0"
echo Copying standalone.html to index.html...
copy /Y "standalone.html" "index.html"
echo Done.
