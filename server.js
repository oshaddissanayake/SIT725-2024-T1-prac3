const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// Endpoint to add two numbers
app.get('/api/addTwoNumbers', (req, res) => {
    const number01 = parseInt(req.query.number01);
    const number02 = parseInt(req.query.number02);
    if (!number01 || !number02) {
        return res.status(400).send('provide parameters :');
    }
    const sum = number01 + number02;
    res.json({ data: sum });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
