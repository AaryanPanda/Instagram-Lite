const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const cors = require('cors');
const path = require('path');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, './client/dist')));

// Catch-all route to serve index.html for all other routes (React Router support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/dist', 'index.html'));
});

sequelize
  .sync()
  .then(() => {
    console.log('Database & tables synced');
  })
  .catch((error) => {
    console.log(`Error syncing database:`, error);
  });

const PORT = process.env.PORT || 5101;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
