FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

FROM node:lts-alpine as production-stage
ENV NODE_ENV="production"
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
EXPOSE 8150
COPY --from=build-stage /app/dist dist/
ENV JWT_SECRET="CHANGE_ME"
CMD ["yarn", "start"]