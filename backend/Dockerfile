FROM node:lts as production-stage
WORKDIR /app
COPY package.json yarn.lock .
RUN yarn install --production
EXPOSE 8150
COPY . .
CMD ["yarn", "start"]