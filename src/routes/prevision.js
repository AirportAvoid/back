const express = require('express');
const PrevisionController = require('../controllers/prevision.js');
const router = express.Router();

router.post('/', async (req,res) => {
  const payload = req.body;
  console.log("Resposta frontend", req.body)
  try {
      const response = await PrevisionController.startPrevision(payload);
      res.json(response);
    }catch(error){
      res.status(error.status).json(error.msg);
  }
});

module.exports = router;

