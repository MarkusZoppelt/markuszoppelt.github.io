#!/bin/bash

# Remove unnecessary directories
rm -rf nextjs-site/
rm -rf site/
rm -rf .next/
rm -rf node_modules/

# Remove unnecessary files
rm -f .DS_Store
rm -f index.md
rm -f build.sh
rm -f _config.yml

# Clean up any remaining build artifacts
find . -type d -name "node_modules" -exec rm -rf {} +
find . -type f -name "*.log" -delete
find . -type f -name "*.tsbuildinfo" -delete

echo "Cleanup complete!" 