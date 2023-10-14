FROM node:lts-alpine as runtime
WORKDIR /usr/src/

COPY ./ ./

RUN npm install

RUN npm run build

ENV HOST=0.0.0.0

ENV PORT=5002

EXPOSE 5002

CMD ["npm","start"]