FROM node:17-slim as build

# Install openssl for prisma
RUN apt-get update
RUN apt-get install -y openssl

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY yarn.lock ./

# If you are building your code for production
RUN npx yarn install --immutable --only=production

# Bundle app source
COPY . ./

# Generate db
RUN npx prisma generate

EXPOSE 6001
CMD ["npx", "yarn", "start"]