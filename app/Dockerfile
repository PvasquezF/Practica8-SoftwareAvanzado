FROM node:12

# Create app directory
WORKDIR /
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 8080
CMD [ "node", "app.js" ]