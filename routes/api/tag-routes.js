const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }]
    })
    res.json(tags)
  } catch(err) {
    console.log(err)
    res.status(500).send('Error getting tags data')
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  const { id } = req.params
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk({
      includes: [{ model: Product }]
    })
    res.json(tag)
  } catch(err) {
    console.log(err)
    res.status(500).send(`Error fetching tag ${id}`)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name
    })
    res.json(newTag)
  } catch(err) {
    console.log(err)
    res.status(500).send(`Error creating tag`)
  }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  const { id } = req.params

  try {
    const tagUpdated = await Category.update(req.body, {
      where: { id }
    })
    res.json(tagUpdated)
  } catch(err) {
    console.log(err)
    res.status(500).send(`Error updating tag ${id}`)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const { id } = req.params
  try {
    const tagDestroyed = await Tag.destroy({
      where: { id }
    })
    res.json(tagDestroyed)
  } catch(err) {
    console.log(err)
    res.status(500).send(`Error deleting tag ${id}`)
  }
});

module.exports = router;
