FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm install -g nodemon

EXPOSE 3000

CMD ["npm", "run", "dev"]