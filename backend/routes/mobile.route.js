const express = require('express')
const app = express()
const mobileRoute = express.Router()

// Mobile model
let Mobile = require('../models/Mobile')

// Add model
mobileRoute.route('/create').post((req, res, next) => {
  Mobile.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get All mobile models
mobileRoute.route('/').get((req, res) => {
  Mobile.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single mobile model
mobileRoute.route('/read/:id').get((req, res) => {
  Mobile.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update model
mobileRoute.route('/update/:id').put((req, res, next) => {
  Mobile.findByIdAndUpdate(req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Data updated successfully')
      }
    },
  )
})

// Delete employee
mobileRoute.route('/delete/:id').delete((req, res, next) => {
  Mobile.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = mobileRoute
