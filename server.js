const express = require('express');
const sequelize = require('./utils/sequelize');
const itemRoutes = require('./routes/itemRoutes');
const PORT = 3000;

// Initialize Express
const app = express();
app.use(express.json());
app.use('/items', itemRoutes);

// Sync Sequelize
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected!');
        await sequelize.sync();
        console.log('Database synced!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});