FROM node:18-alpine AS builder
USER root
RUN apk add --no-cache git
RUN mkdir -p /opt/kuma_src && chown node:node /opt/kuma_src
USER node
WORKDIR /opt/kuma_src
RUN git clone --depth 1 --branch 1.23.16 https://github.com/louislam/uptime-kuma.git .
COPY --chown=node:node uptime_kuma_custom_files/i18n.js ./src/i18n.js
COPY --chown=node:node uptime_kuma_custom_files/ru-RU.json ./src/lang/ru-RU.json
COPY --chown=node:node uptime_kuma_custom_files/main.js ./src/main.js
COPY --chown=node:node uptime_kuma_custom_files/app.scss ./src/assets/app.scss
RUN npm ci
RUN npm install country-flag-emoji-polyfill
RUN NODE_OPTIONS=--max-old-space-size=1200 npm run build

FROM louislam/uptime-kuma:1
USER root
RUN rm -rf /app/dist
COPY --from=builder /opt/kuma_src/dist /app/dist
RUN chown -R node:node /app/dist
RUN mkdir -p /app/data && chown -R node:node /app/data
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
USER node
ENTRYPOINT ["/entrypoint.sh"]
