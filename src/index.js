import express from 'express';
import recipesRoutes from './routes/recipes.routes.js';
import categoriesRoutes from './routes/categories.routes.js';

const app = express();

app.listen(3000);
app.use(express.json());

app.use('/api', recipesRoutes);
app.use('/api', categoriesRoutes);
console.log('Server running on port', 3000);
