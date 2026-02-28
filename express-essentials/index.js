import express from 'express';
// import  path from "path";
// import { fileURLToPath } from 'url';
import data from "./data/mock.json" with {type: 'json'};

const app = express();

const PORT = 3000;


//GET
app.get('/', (req, res) => {
    res.json(data);
});


//GET with routing parameter
app.get("/class/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = data.filter(student => student.id === id)

    res.send(student);
});

//GET with next
app.get("/next", (req, res, next) => {
    console.log("Next 1");
    next();
}, (req, res) => {
    res.send("Next");
});

//redirect
app.get("/redirect", (req, res) => {
    res.redirect("https://www.facebook.com");
})


app.route('/products')
   .get((req, res) => {
       // res.send('App create');
       throw new Error();
   })
   .post((req, res) => {
       res.send('App create');
   })
   .put((req, res) => {
       res.send('App create');
   })
   .delete((req, res) => {
       res.send('App create');
   });

// POST
app.post('/create', (req, res) => {
    res.send('App create');
})

//Put
app.put('/edit', (req, res) => {
    res.send('App create');
})

//Delete
app.delete('/delete', (req, res) => {
    res.send('App create');
})


// using express.json nd express.urlencoded
app.use(express.json());

app.post('/item', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.use(express.urlencoded({extended:true}));

app.post('/items', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})


//error handling
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send('Something went wrong');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


