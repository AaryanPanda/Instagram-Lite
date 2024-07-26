
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);

sequelize
  .sync()
  .then(() => {
    console.log('Database & tables synced');
  })
  .catch((error) => {
    console.log(`Error syncing database:`, error);
  });

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
