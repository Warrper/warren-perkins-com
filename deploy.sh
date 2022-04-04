#!/bin/bash
cp robots.txt ./dist/robots.txt
cp meta-image.png ./dist/assets/meta-image.png
cp -r ./content ./dist/content
cp -r ./api ./dist/api
aws s3 rm s3://warrenperkinscom/content --recursive
aws s3 rm s3://warrenperkinscom/api --recursive
aws s3 sync ./dist s3://warrenperkinscom
aws cloudfront create-invalidation --distribution-id E1EZWRUJEFQWWN --paths "/*"