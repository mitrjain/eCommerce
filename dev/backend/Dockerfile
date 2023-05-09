FROM node:19-alpine

COPY . /backend_app/
WORKDIR /backend_app
RUN npm ci
CMD ["npm", "run", "start"]