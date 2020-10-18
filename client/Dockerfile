FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package.json yarn.lock .
RUN yarn
COPY . .
RUN yarn build

FROM nginx:stable-alpine as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf