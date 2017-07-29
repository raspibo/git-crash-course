#!/bin/bash

git submodule init
git submodule update 2> /dev/null
mkdir -p reveal.js/js/
cp libs/head.min.js reveal.js/js/
rm -f reveal.js/index.html
ln index.html git-crash-course.md reveal.js/ 2> /dev/null
cd reveal.js
npm install
npm start
