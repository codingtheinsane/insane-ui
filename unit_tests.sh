#!/bin/bash

find ./test/unit -name '*.js' | xargs ./node_modules/mocha/bin/mocha -R spec