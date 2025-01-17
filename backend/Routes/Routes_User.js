// category and request
const express = require('express');
const router = express.Router();

const {addCategory,getallCategories} = require('../Controllers/Category');
const {addRequest} = require('../Controllers/Request');

router.post('/add-category',addCategory);
router.get('/get-categories',getallCategories);
router.post('/add-request',addRequest);

module.exports = router;
