#!/bin/bash
aws s3 sync ./dist s3://warrenperkinscom
aws s3 rm s3://warrenperkinscom/content --recursive
aws s3 sync ./content s3://warrenperkinscom/content
aws s3 rm s3://warrenperkinscom/api --recursive
aws s3 sync ./api s3://warrenperkinscom/api
aws cloudfront create-invalidation --distribution-id E1EZWRUJEFQWWN --paths "/*"