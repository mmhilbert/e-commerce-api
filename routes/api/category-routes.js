const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll()
    res.json(categoryData)
  } catch(err) {
    console.log(err)
    res.status(500).send('Error getting all categories')
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const { id } = req.params
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(id, {
      include: [{ model: Product }]
    })
    res.json(categoryData)
  } catch(err) {
    console.log(err)
    res.status(500).send(`Error getting category ${id}`)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    })
    res.json(newCategory)
  } catch(err) {
    console.log(err)
    res.status(500).send('Error creating category')
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const { id } = req.params
  // be sure to include its associated Products
  try {
    const categoryUpdated = await Category.update(req.body, {
      where: { id }
    })
    res.json(categoryUpdated)
  } catch(err) {
    console.log(err)
    res.status(500).send(`Error updating category ${id}`)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const { id } = req.params
  try {
    const categoryDestroyed = await Category.destroy({
      where: { id }
    })
    res.json(categoryDestroyed)
  } catch(err) {
    console.log(err)
    res.status(500).send(`Error deleting category ${id}`)
  }
});

module.exports = router;
