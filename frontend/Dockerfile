FROM node:17-alpine as build

# Create app directory
WORKDIR /app

# Install python (necessary peer dep for node-gyp used in parcel)
RUN apk add --no-cache --virtual .gyp \
                                  build-base \
                                  python3

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY yarn.lock ./

# If you are building your code for production
RUN npx yarn install --immutable --only=production

# Clean up apk .gyp resources
RUN apk del .gyp

# Bundle app source
COPY . ./
RUN npx yarn build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/web
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
