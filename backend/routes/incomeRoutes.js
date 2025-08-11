const express = require('express');
const {
    addIncome,
    getAllIncome,
    deleteIncome,
    downloadLoadExcel
} = require("../controllers/incomeController");
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post("/add", protect, addIncome);
router.get("get", protect, getAllIncome);
router.get("/downloadloadexcel", protect, downloadLoadExcel);
router.delete("/:id", protect, deleteIncome);

module.exports = router;