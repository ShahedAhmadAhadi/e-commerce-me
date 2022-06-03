const express = require('express')
const {appTest} = require('../controllers/test')
const router = express.Router()

router.route('/test').get(appTest)

module.exports = router
