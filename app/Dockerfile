FROM node:12

# Create app directory
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .

RUN npm install
COPY . .

EXPOSE 80
CMD [ "node", "app.js" ]