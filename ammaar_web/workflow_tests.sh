#!/bin/bash

set -e # exit if any non-zero return code is found. 

npm ci
npm run lint
npm run build

npm run preview -- --host 0.0.0.0 &
PREVIEW_PID=$!

npx wait-on http://localhost:4173

npm run test:e2e
kill $PREVIEW_PID