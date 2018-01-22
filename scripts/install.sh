#!/bin/bash
set -x

# Import the SSH deployment key
openssl aes-256-cbc -K $encrypted_24baf089f7ed_key -iv $encrypted_24baf089f7ed_iv
  -in id_rsa.enc -out id_rsa -d
rm id_rsa.enc # Don't need it anymore
chmod 600 id_rsa
mv id_rsa ~/.ssh/id_rsa