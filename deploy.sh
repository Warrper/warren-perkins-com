#!/bin/bash
aws s3 sync ./dist s3://warrenperkinscom
aws s3 sync ./content s3://warrenperkinscom/content
aws cloudfront create-invalidation --distribution-id E1EZWRUJEFQWWN --paths "/*"