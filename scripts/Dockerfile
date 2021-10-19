# Multistage Docker build

# first stage build
FROM ubuntu:latest AS test
RUN mkdir app
WORKDIR /app
COPY webApp .



# second stage build
FROM ubuntu:latest AS debug
RUN mkdir app
WORKDIR /app
COPY --from=0 /app .






