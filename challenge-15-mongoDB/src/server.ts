import express from 'express';
import db from './config/connection';
import routes from './routes';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes); // Ensure the '/api' prefix is added here
console.log('User routes registered');

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});