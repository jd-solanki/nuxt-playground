FROM node:lts

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["node", ".output/server/index.mjs"]

