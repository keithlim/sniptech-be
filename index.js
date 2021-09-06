const dotenv = require('dotenv');
dotenv.config();

const app = require('./src/app');
const cors = require('cors');

app.use(cors());

// create HTTP server
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('Running on port: ', port);
});