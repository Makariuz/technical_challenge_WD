const express = require("express");
const data = require("../data/phones.json");

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).json(data);
});

router.get("/:id", async (req, res) => {
    const data_id = req.params.id

    console.log(data_id)
    const phone_detail = data.find(item => item.id == req.params.id);
    res.status(200).json(phone_detail)
});

module.exports = router;
