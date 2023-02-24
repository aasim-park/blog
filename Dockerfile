# builder node
FROM node As build

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

# server node
FROM node:lts-slim As deploy

ENV SECRET_DB_URL=${SECRET_DB_URL}

WORKDIR /app

COPY --from=build /app/package.json .
COPY --from=build /app/build .

RUN npm i

EXPOSE 3000

CMD ["node" , "index.js"]

# CMD ["sh"]