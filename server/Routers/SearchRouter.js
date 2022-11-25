
const express = require('express')
const {search} = require('../controller/SearchController.js')

const searchRouter = express.Router()

searchRouter.get('/search', search)


module.exports = searchRouter;