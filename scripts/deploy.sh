#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'master' ] ; then
    # Initialize a new git repo in _site, and push it to our server.
    cd build
    git init

    git remote add deploy "app_deploy@178.62.2.65:/var/www/crypto"
    git config user.name "Travis CI"
    git config user.email "garymeehan+travisCI@outlook.com"

    git add .
    git commit -m "Deploy"
    git push --force deploy master
else
    echo "Not deploying, since this branch isn't master."
fi