FROM node:alpine
WORKDIR /
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
EXPOSE 3000
RUN npm i
CMD ["npm", "run", "start"]