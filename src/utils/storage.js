import { md5 } from 'md5js'
const storage = require('store2')
const namespace = 'NS-' + process.env.VUE_APP_ENV + '-' + md5(process.env.VUE_APP_ENV, 16)
console.log('storage namespace : ' + namespace)
const instance = storage.namespace(namespace)
export default instance
