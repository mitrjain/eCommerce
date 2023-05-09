FROM node:19-alpine

COPY dev/frontend /frontend_app/
WORKDIR /frontend_app
RUN npm ci
CMD ["npm", "start"]