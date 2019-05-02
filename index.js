#!/usr/bin/env node

'use strict'

const chalk = require('chalk')
const currentNodeVersion = process.versions.node
const semver = currentNodeVersion.split('.')
const major = semver[0]

if (major < 10) {
	throw new Error(
		chalk.red(
			'You are running Node ' +
			currentNodeVersion +
			'.\n' +
			'Thanos.js requires Node 8 or higher. \n' +
			'Please update your version of Node.'
		)
	)
}

require('./src')
