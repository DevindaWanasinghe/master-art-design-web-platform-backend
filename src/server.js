const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
const cookieparser = require('cookie-parser');
app.use(cookieparser());
const bodyParser = require('body-parser');

const user = require('./routs/user');
const routes = require('./routs/routes');

const port = 8081;
app.use(cors({
    origin:['http://localhost:3000'],
    methods:['GET','POST'],
    credentials: true,
}));

app.use('/user',user);
app.use('/api', routes);




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});