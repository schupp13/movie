FROM node:lts-alpine3.17
WORKDIR /movie-app
COPY package.json /movie-app/
RUN yarn install 
COPY . /movie-app/
EXPOSE 3005
CMD ["yarn", "build"]


# CReate nginx server
FROM nginx:1.23-alpine AS stage
COPY --from=build /movie-app/dist /user/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
