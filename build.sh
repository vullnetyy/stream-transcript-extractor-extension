commitSha=$(git rev-parse --short HEAD)

releaseFileName="release-$commitSha.zip"

zip -r $releaseFileName . -x package.json package-lock.json README.md node_modules/\* build/\* .git/\* build.sh

mv $releaseFileName build/$releaseFileName