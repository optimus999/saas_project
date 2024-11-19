const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors=require('cors');


dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: '*',
}));

const textRoutes = require('./routes/textRoutes');
app.use('/api/text', textRoutes);

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
