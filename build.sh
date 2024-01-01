#! /usr/bin/env zsh

# Generate sites
for site in *.md; do
  pandoc -V lang=en $site \
          -t html5 \
          -o ${$(basename $site)%.*}.html \
          -s -c style.css
  echo "Generated $site"
done
