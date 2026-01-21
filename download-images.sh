#!/bin/bash

# Create images directory
mkdir -p public/images

echo "Downloading stock images from Unsplash..."

# Landing Page Images
curl -L "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80" -o public/images/modern-building.jpg
curl -L "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80" -o public/images/real-estate.jpg
curl -L "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" -o public/images/city-buildings.jpg

# Logistics Images
curl -L "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&q=80" -o public/images/truck-logistics.jpg
curl -L "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80" -o public/images/delivery-truck.jpg
curl -L "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80" -o public/images/warehouse.jpg
curl -L "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200&q=80" -o public/images/cargo-shipping.jpg

# Service Images
curl -L "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80" -o public/images/delivery-van.jpg
curl -L "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80" -o public/images/packages.jpg
curl -L "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80" -o public/images/freight.jpg

# Background Images
curl -L "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" -o public/images/hero-bg.jpg
curl -L "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1920&q=80" -o public/images/homes-hero.jpg
curl -L "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80" -o public/images/logistics-hero.jpg

echo "Images downloaded successfully!"
echo "Total images: $(ls -1 public/images | wc -l)"
