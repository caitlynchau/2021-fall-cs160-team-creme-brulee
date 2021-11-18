const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const userRouter = require("./routes/user-router.js")
const postRouter = require("./routes/post-router.js")
//const swaggerUi = require('swagger-ui-express');
//swaggerDocument = require('..swagger.json/');

const db = require('./db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Briefcase! Team Creme Brulee <3' });
});
app.use('/userapi', userRouter);
app.use('/postapi', postRouter);

app.listen(3001, () => {


//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  console.log('Server listening on 3001');
});
