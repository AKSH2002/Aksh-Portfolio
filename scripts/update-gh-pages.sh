#!/usr/bin/env bash
# Update the local gh-pages branch with the current production build.
# After running this, push from your machine: git push origin gh-pages

set -e
cd "$(dirname "$0")/.."

echo "Building..."
npm run build

echo "Updating gh-pages branch with build..."
BRANCH=$(git branch --show-current)
BUILD_TMP=$(mktemp -d)
cp -r build/* "$BUILD_TMP/"

git checkout gh-pages

# Remove all tracked files and dirs on gh-pages
git ls-files -z | xargs -0 rm -f 2>/dev/null || true
for d in $(git ls-files -z | xargs -0 dirname 2>/dev/null | sort -u); do [ -d "$d" ] && rmdir "$d" 2>/dev/null || true; done
# Copy new build to root
cp -r "$BUILD_TMP"/* .
rm -rf "$BUILD_TMP"

git add -A
if git diff --staged --quiet; then
  echo "No changes to commit."
else
  git commit -m "Update site with latest build"
  echo "Committed. Push with: git push origin gh-pages"
fi

git checkout "$BRANCH"
echo "Done. Switch back to $BRANCH. Push gh-pages when ready: git push origin gh-pages"
