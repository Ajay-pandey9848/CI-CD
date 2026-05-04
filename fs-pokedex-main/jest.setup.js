/* global require, global */

const { TextEncoder, TextDecoder } = require('util')
require('whatwg-fetch')  // This adds fetch to global

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder