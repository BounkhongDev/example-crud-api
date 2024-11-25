FROM node:18
WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app

RUN npx prisma generate

CMD ["node", "dist/main.js"]