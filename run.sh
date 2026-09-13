#!/bin/bash
set -euo pipefail

cd -- "$(dirname -- "${BASH_SOURCE[0]}")"

if ! command -v python3 >/dev/null 2>&1; then
    echo "Python 3 is required to serve the slides." >&2
    exit 1
fi

git submodule update --init -- reveal.js

# reveal.js includes compiled assets; its development dependencies are unnecessary.
exec python3 -m http.server "${PORT:-8000}" --bind "${HOST:-127.0.0.1}"
