FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev \
	&& npm cache clean --force \
	&& apk upgrade --no-cache \
	&& rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx

COPY . .

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "index.js"]