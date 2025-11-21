#!/bin/bash

# Image optimization script
# Requires: imagemagick (convert command)

IMAGES_DIR="public/images"
QUALITY=80
MAX_WIDTH=1920

echo "Starting image optimization..."
echo "Target directory: $IMAGES_DIR"
echo "Quality: $QUALITY"
echo "Max width: $MAX_WIDTH"

# Check if imagemagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed."
    echo "Install with: brew install imagemagick"
    exit 1
fi

total_before=0
total_after=0

for file in "$IMAGES_DIR"/*.{png,jpg,jpeg}; do
    [ -e "$file" ] || continue
    
    filename=$(basename "$file")
    filesize_before=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
    total_before=$((total_before + filesize_before))
    
    # Backup original
    cp "$file" "${file}.backup"
    
    # Optimize
    if [[ $file == *.png ]]; then
        convert "$file" -quality $QUALITY -resize "${MAX_WIDTH}x>" -strip "${file}.tmp"
    else
        convert "$file" -quality $QUALITY -resize "${MAX_WIDTH}x>" -strip "${file}.tmp"
    fi
    
    # Replace if smaller
    filesize_after=$(stat -f%z "${file}.tmp" 2>/dev/null || stat -c%s "${file}.tmp" 2>/dev/null)
    total_after=$((total_after + filesize_after))
    
    if [ $filesize_after -lt $filesize_before ]; then
        mv "${file}.tmp" "$file"
        savings=$(( (filesize_before - filesize_after) * 100 / filesize_before ))
        echo "✓ $filename: $(printf %.1f $((filesize_before / 1024 / 10)))KB → $(printf %.1f $((filesize_after / 1024 / 10)))KB (-${savings}%)"
    else
        rm "${file}.tmp"
        echo "✗ $filename: kept original (no savings)"
    fi
done

echo ""
echo "========================================="
echo "Optimization complete!"
echo "Total before: $(printf %.1f $((total_before / 1024 / 1024 / 10)))MB"
echo "Total after: $(printf %.1f $((total_after / 1024 / 1024 / 10)))MB"
savings_total=$(( (total_before - total_after) * 100 / total_before ))
echo "Total saved: $(printf %.1f $((( total_before - total_after) / 1024 / 1024 / 10)))MB (-${savings_total}%)"
echo "========================================="
