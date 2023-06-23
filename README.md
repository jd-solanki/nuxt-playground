# Nuxt Deployment

## Via Docker

_(stop nginx server on port 80 if running)_

1. run `docker build -t nuxt-app .`
2. run `docker-compose up`
3. Go to `localhost/nuxt-app/demo/` (We are serving on this URL to make sure our nuxt app is deployed successfully)
4. Go to `localhost/nuxt-app/demo-1/` (app won't run)

## Manually

1. Copy nginx config from `.config` dir
2. Copy nuxt app to defined path according to nginx config
3. Build the app & serve it using `node .output/server/index.mjs`
