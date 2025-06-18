import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('server is ready');
});

app.get('/api/jokes', (req, res)=>{
    const jokes =[
        {
            id: 1,
            title: 'A JOKE',
            CONTENT: 'This is a Joke'
        },
        {
            id: 2,
            title: 'Another JOKE',
            CONTENT: 'This is Another Joke'
        },
        {
            id: 3,
            title: ' A Third JOKE',
            CONTENT: 'This is Third  Joke'
        },
        {
            id: 4,
            title: 'A Fourth JOKE',
            CONTENT: 'This is Fourth Joke'
        },
        {
            id: 5,
            title: 'A Fifth JOKE',
            CONTENT: 'This is Fifth Joke'
        },

    ];
    res.send(jokes);
});


const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Serve at http://localhost:${port}`);
   }
);