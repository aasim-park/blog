# builder node
FROM node As build

WORKDIR /app

COPY . .

RUN npm i

ARG SECRET_DB_URL

RUN echo "The ARG variable value is $SECRET_DB_URL"

RUN npm run build

# server node
FROM node:lts-slim As deploy

WORKDIR /app

COPY --from=build /app/package.json .

COPY --from=build /app/build .

RUN npm i

EXPOSE 3000

CMD ["node" , "index.js"]
