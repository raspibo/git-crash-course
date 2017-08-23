#!/bin/bash

git submodule init
git submodule update 2> /dev/null
mkdir -p reveal.js/js/
cp js/* reveal.js/js/
cp css/* reveal.js/css/
cp images/* reveal.js/images/
rm -f reveal.js/index.html reveal.js/git-crash-course.md
ln index.html git-crash-course.md reveal.js/ 2> /dev/null
cd reveal.js
npm install
npm start
