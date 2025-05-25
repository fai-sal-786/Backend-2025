import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('server is ready');
});

//get a list of 5 jokes

app.get('/jokes', (req, res)=>{
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            description: 'This is a joke',
        },
        {
            id: 2,
            title: 'Another joke',
            description: 'This is another joke',
        },
        {
            id: 3,
            title: 'A third joke',
            description: 'This is a third joke',
        },
        {
            id: 4,
            title: 'A fourth joke',
            description: 'This is a fourth joke',
        },
        {
            id: 5,
            title: 'A fifth joke',
            description: 'This is a fifth joke',
        }

    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
});