const express = require('express');
const router = express.Router();
const {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem
} = require('../controller/itemsController/itemController');

router.post('/', createItem); // Create
router.get('/', getAllItems); // Read all
router.get('/:id', getItemById); // Read one
router.put('/:id', updateItem); // Update
router.delete('/:id', deleteItem); // Delete

module.exports = router;
