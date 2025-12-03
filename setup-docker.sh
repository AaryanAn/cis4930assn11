#!/bin/bash

# Script to set up Docker containers for the Observability Assignment

echo "Setting up MongoDB container..."
docker run -d -p 27017:27017 --name mongodb mongo

echo "Setting up Jaeger container..."
docker run -d --name jaeger \
  -p 16686:16686 \
  -p 4317:4317 \
  -p 4318:4318 \
  -p 5778:5778 \
  -p 9411:9411 \
  jaegertracing/jaeger:2.5.0

echo "Containers started!"
echo "MongoDB is running on port 27017"
echo "Jaeger UI is available at http://localhost:16686"
echo ""
echo "To check container status: docker ps"
echo "To stop containers: docker stop mongodb jaeger"
echo "To remove containers: docker rm mongodb jaeger"

