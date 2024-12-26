const Item = require('../../models/Item');
const redisClient = require('../../utils/redisClient');

const createItem = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const item = await Item.create({ name, description, price });
        await redisClient.del('items');
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllItems = async (req, res) => {
    try {
        const cache = await redisClient.get('items');
        if (cache) {
            return res.status(200).json(JSON.parse(cache));
        }
        const items = await Item.findAll();
        await redisClient.set('items', JSON.stringify(items), { EX: 60 });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const cache = await redisClient.get(`item:${id}`);
        if (cache) {
            return res.status(200).json(JSON.parse(cache));
        }
        const item = await Item.findByPk(id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        await redisClient.set(`item:${id}`, JSON.stringify(item), { EX: 60 });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price } = req.body;
        const item = await Item.findByPk(id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        await item.update({ name, description, price });
        await redisClient.del(`item:${id}`);
        await redisClient.del('items');
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findByPk(id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        await item.destroy();
        await redisClient.del(`item:${id}`);
        await redisClient.del('items');
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem
}
