#/bin/bash

inotifywait -q -m -e CLOSE_WRITE --format="git commit -m autocommit on change %w" *.js | sh
