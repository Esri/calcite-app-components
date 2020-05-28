#!/bin/bash

# this script is meant to be run Travis deploys and determines if there will release-worthy changes.
# based on https://github.com/conventional-changelog/standard-version/issues/192#issuecomment-610494804

if \
  { git log "$( git describe --tags --abbrev=0 )..HEAD" --format='%s' | cut -d: -f1 | sort -u | sed -e 's/([^)]*)//' | grep -q -i -E '^feat|fix$' ; } || \
  { git log "$( git describe --tags --abbrev=0 )..HEAD" --format='%s' | cut -d: -f1 | sort -u | sed -e 's/([^)]*)//' | grep -q -E '\!$' ; } || \
  { git log "$( git describe --tags --abbrev=0 )..HEAD" --format='%b' | grep -q -E '^BREAKING CHANGE:' ; }
then
  echo "Deploying @next from existing build..."
  npm run util:deployNextFromExistingBuild
  echo "@next deployed! 🚀"
else
  echo "No changes since the previous release, skipping..."
fi
