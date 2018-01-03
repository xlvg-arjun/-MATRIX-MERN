#!/bin/bash
cd frontend && yarn run build
rsync -avzh /usr/src/app/frontend/dist/ /usr/src/app/public/
node /usr/src/app/backend/index.js
