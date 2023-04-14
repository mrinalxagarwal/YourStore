const mongoose = require('mongoose');
const app = require('./app.js');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './config.env' });
// app.use(require('cors')());
app.use(cors());

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connection Successful');
  });

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}...`);
});
