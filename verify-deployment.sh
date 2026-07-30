#!/bin/sh
set -eu

base_url="${1:-https://btltechmusic.pages.dev}"
base_url="${base_url%/}"

check_status() {
  path="$1"
  expected="$2"
  retries=4
  while [ $retries -gt 0 ]; do
    actual="$(curl -sS -o /dev/null -w '%{http_code}' --max-time 20 "$base_url$path")"
    if [ "$actual" = "$expected" ]; then
      return 0
    fi
    retries=$((retries - 1))
    if [ $retries -gt 0 ]; then
      sleep 5
    fi
  done
  echo "Verification failed: $path returned $actual, expected $expected." >&2
  exit 1
}

# Allow Cloudflare CDN time to propagate the new deployment
sleep 10

check_status / 200
check_status /btltech 200
check_status /choko-king 200
check_status /lyrid 200
check_status /go-slow 200
check_status /london-outside 200
check_status /choko-so-cool 200
check_status /privacy-policy 200
check_status /terms-of-service 200
check_status /definitely-not-a-real-btltech-page 404

headers="$(curl -sSI --max-time 20 "$base_url/")"
printf '%s' "$headers" | grep -qi '^content-security-policy:'
if printf '%s' "$headers" | grep -qi 'unsafe-eval'; then
  echo 'Verification failed: CSP still permits unsafe-eval.' >&2
  exit 1
fi

curl -sS --max-time 20 "$base_url/privacy-policy" | grep -q 'rel="canonical" href="https://btltechmusic.com/privacy-policy"'
curl -sS --max-time 20 "$base_url/terms-of-service" | grep -q 'rel="canonical" href="https://btltechmusic.com/terms-of-service"'
curl -sS --max-time 20 "$base_url/choko-king" | grep -q '1EkMryKT07cI2PF9mLBn7D'
curl -sS --max-time 20 "$base_url/choko-king" | grep -q 'music.apple.com/gb/artist/choko-king/6781295368'
curl -sS --max-time 20 "$base_url/btltech" | grep -q 'Choko So Cool by BTLTECH'
curl -sS --max-time 20 "$base_url/btltech" | grep -q 'name="twitter:card" content="summary_large_image"'
curl -sS --max-time 20 "$base_url/choko-king" | grep -q 'name="twitter:card" content="summary_large_image"'
curl -sS --max-time 20 "$base_url/lyrid" | grep -q 'name="twitter:card" content="summary_large_image"'
curl -sS --max-time 20 "$base_url/go-slow" | grep -q 'rel="canonical" href="https://btltechmusic.com/go-slow"'
curl -sS --max-time 20 "$base_url/london-outside" | grep -q 'rel="canonical" href="https://btltechmusic.com/london-outside"'
curl -sS --max-time 20 "$base_url/choko-so-cool" | grep -q 'Choko So Cool by BTLTECH'

if curl -sSL --max-time 20 "$base_url/visuals/sweet-fire-teaser.html" | grep -q 'Sweet Fire — Choko King · Teaser'; then
  echo 'Verification failed: excluded teaser is still being served.' >&2
  exit 1
fi

echo "Verified deployment: $base_url"
