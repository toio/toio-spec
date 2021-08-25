#!/bin/bash -u

cd `git rev-parse --show-toplevel`
\fd '.svg|.png' v2-website > images.list

IMAGES=$(cat images.list)

for file in ${IMAGES}; do
    orig_file=$(basename ${file})
    if  [[ -f ./docs/assets/${orig_file} ]] ; then
        diff ./docs/assets/${orig_file} ${file} -q
        result=$?
        if [[ $result != 0 ]] ; then
            cp -vf ./docs/assets/${orig_file} ${file}
        fi
    else
        echo "ERROR ${file}"
    fi
done
