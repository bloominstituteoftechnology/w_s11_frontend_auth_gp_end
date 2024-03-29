const express = require('express')
const protect = require('../auth/tokenMiddleware')

let cereals = [
  {
    "id": 1,
    "name": "Rice Krispies",
    "brand": "Kellogg's",
    "sugarContent": 4
  },
  {
    "id": 2,
    "name": "Cheerios",
    "brand": "General Mills",
    "sugarContent": 1
  },
  {
    "id": 3,
    "name": "Corn Flakes",
    "brand": "Kellogg's",
    "sugarContent": 3
  },
  {
    "id": 4,
    "name": "Frosted Flakes",
    "brand": "Kellogg's",
    "sugarContent": 11
  },
  {
    "id": 5,
    "name": "Lucky Charms",
    "brand": "General Mills",
    "sugarContent": 10
  },
  {
    "id": 6,
    "name": "Froot Loops",
    "brand": "Kellogg's",
    "sugarContent": 12
  },
  {
    "id": 7,
    "name": "Cinnamon Toast Crunch",
    "brand": "General Mills",
    "sugarContent": 9
  },
  {
    "id": 8,
    "name": "Cap'n Crunch",
    "brand": "Quaker Oats",
    "sugarContent": 12
  },
  {
    "id": 9,
    "name": "Honey Nut Cheerios",
    "brand": "General Mills",
    "sugarContent": 9
  },
  {
    "id": 10,
    "name": "Shredded Wheat",
    "brand": "Post",
    "sugarContent": 0
  }
]

const router = express.Router()

router.get('/', protect, (req, res) => {
  res.json(cereals)
})

module.exports = router
