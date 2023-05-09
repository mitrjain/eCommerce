FROM node:19-alpine

COPY . /frontend_app/
WORKDIR /frontend_app
RUN npm ci
CMD ["npm", "start"]