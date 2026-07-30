#!/bin/sh
set -eu

publish_dir="$(mktemp -d /tmp/btltechmusic-publish.XXXXXX)"
trap 'rm -rf "$publish_dir"' EXIT HUP INT TERM

rsync -a \
  --exclude='.git/' \
  --exclude='.wrangler/' \
  --exclude='.codex/' \
  --exclude='.agents/' \
  --exclude='visuals/' \
  ./ "$publish_dir/"

if find "$publish_dir" -path '*/visuals/*' -print -quit | grep -q .; then
  echo 'Refusing to deploy: visuals/ was copied into the publish directory.' >&2
  exit 1
fi

WRANGLER_LOG_PATH=/tmp/btltechmusic-deploy.log \
  wrangler pages deploy "$publish_dir" \
  --project-name=btltechmusic \
  --branch=main \
  --commit-dirty=true

./verify-deployment.sh https://btltechmusic.pages.dev
