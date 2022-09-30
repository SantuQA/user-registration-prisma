FROM node:16-bullseye-slim AS development

WORKDIR /

COPY package*.json ./

COPY prisma ./prisma/

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:16-bullseye-slim as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /dist ./dist

CMD ["node", "dist/main"]