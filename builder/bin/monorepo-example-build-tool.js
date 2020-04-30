#!/usr/bin/env node
process.env.MRBUILDER_INTERNAL_PRESETS='@mrbuilder/monorepo-example-build-tool'
require('@mrbuilder/cli/bin/mrbuilder');
