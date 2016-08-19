#!/bin/sh
echo "==Building all Drop dependences=="
echo "+ Installing NPM modules at ./"
npm install
cd ./core
echo "+ Installing NPM modules at ./core"
npm install
