import { Router } from 'express';
import { prisma } from '../db.js';

const router = Router();

router.get('/recipes', async (req, res) => {
  const recipes = await prisma.recipe.findMany();
  res.json(recipes);
});

router.get('/recipe/:id', async (req, res) => {
  const recipeFound = await prisma.recipe.findFirst({
    where: {
      id: +req.params.id,
    },
    include: {
      category: true,
    },
  });
  res.json(recipeFound);
});

router.delete('/recipe/:id', async (req, res) => {
  const recipeDeleted = await prisma.recipe.delete({
    where: {
      id: +req.params.id,
    },
  });
  res.json(recipeDeleted);
});

router.post('/recipes/', async (req, res) => {
  const recipeCreated = await prisma.recipe.create({
    data: req.body,
  });
  res.json(recipeCreated);
});

router.put('./reciper/:id', async (req, res) => {
  const recipeUpdated = await prisma.recipe.update({
    where: {
      id: +req.params.id,
    },
    data: req.body,
  });
  res.json(recipeUpdated);
});

export default router;
