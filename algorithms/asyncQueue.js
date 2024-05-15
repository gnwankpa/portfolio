const async = require('async')

const queue = async.queue('function', 'concurrency value')