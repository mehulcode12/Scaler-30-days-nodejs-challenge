const express = require('express');
const path = require('path');

/**
 * Express application serving static files from the "public" directory
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function staticFileServer(req, res){
    const app = express();

    app.use(express.static(path.join(__dirname, 'public')));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    const PORT = process.env.PORT || 2000;
    app.listen(PORT, () => {
        console.log(`Serves is running on port ${PORT}`);
    })
}

staticFileServer();