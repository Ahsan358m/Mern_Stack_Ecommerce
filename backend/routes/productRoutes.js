const express = require('express');
const { getAllProducts } = require('../controllers/productControllers');

const router = express.Router();

router.route('/produts').get(getAllProducts);





module.exports = router;