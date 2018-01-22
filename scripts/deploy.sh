#!/bin/bash
set -x # Show the output of the following commands (useful for debugging)
echo "running deploy script"
eval "$(ssh-agent -s)" # Start ssh-agent cache
chmod 600 id_rsa # Allow read access to the private key
ssh-add id_rsa # Add the private key to SSH

git config --global push.default matching
git remote add deploy ssh://deploy@$IP:$DEPLOY_DIR
git push deploy master

# Skip this command if you don't need to execute any additional commands after deploying.
ssh -T deploy@$IP <<EOF
  cd $DEPLOY_DIR
  yarn install && yarn build && yarn restart
EOF