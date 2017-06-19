#!/bin/bash

cp libs/head.min.js reveal.js/js/
cp index.html git-crash-course.md reveal.js/
cd reveal.js
npm install
npm start
