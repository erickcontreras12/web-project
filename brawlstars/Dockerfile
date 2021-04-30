FROM node:12.16.0

WORKDIR /

ENV PATH /node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

COPY . .

# EXPOSE 4000

CMD ["npm", "start"]