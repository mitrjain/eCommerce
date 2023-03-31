FROM node:19-alpine

COPY dev/backend /backend_app/
WORKDIR /backend_app
RUN npm ci
CMD ["npm", "run", "start"]