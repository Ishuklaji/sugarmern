
const express = require('express')
const {search,makeup,brushes} = require('../controller/SearchController.js')

const searchRouter = express.Router()

searchRouter.get('/facecare', search)
searchRouter.get('/makeup', makeup)
searchRouter.get('/brushes', brushes)


module.exports = searchRouter;