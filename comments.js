// Create web server
// 1. Create a new web server
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// 2. Create a new route to the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 3. Listen on port 3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// 4. Create a new route to the comments page
app.get('/comments', (req, res) => {
    res.sendFile(path.join(__dirname, 'comments.html'));
});

// 5. Create an array of comments
const comments = [
    {
        username: 'Tammy',
        comment: 'I love this article!',
        date: new Date()
    },
    {
        username: 'Jimmy',
        comment: 'I love the article!',
        date: new Date()
    }
];

// 6. Create a new route to the comments API
app.get('/api/comments', (req, res) => {
    res.json(comments);
});

// 7. Create a new route to the comments page
app.post('/comments', (req, res) => {
    console.log('Post request received');
    res.send('Post request received');
});

// 8. Create a new route to the comments page
app.post('/api/comments', (req, res) => {
    console.log('Post request received');
    res.send('Post request received');
});

// 9. Create a new route to the comments page
app.put('/api/comments', (req, res) => {
    console.log('Put request received');
    res.send('Put request received');
});

// 10. Create a new route to the comments page
app.delete('/api/comments', (req, res) => {
    console.log('Delete request received');
    res.send('Delete request received');
});