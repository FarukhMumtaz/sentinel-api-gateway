const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const securityGuard = require('../middlewares/auth');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'DB Error' });
  }
});

// POST a new project
router.post('/', securityGuard, async (req, res) => {
  const { name, status } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO projects (name, status) VALUES ($1, $2) RETURNING *',
      [name, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database Insertion Error' });
  }
});

module.exports = router;
