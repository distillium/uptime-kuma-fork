#!/bin/sh
set -e
echo "==> Starting Uptime-Kuma without chown checks"
exec /usr/bin/dumb-init -- node server/server.js
