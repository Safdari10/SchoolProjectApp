const express = require("express");
const {
  getLearningObjectives,
} = require("../controller/StudentContentController");
const { verifyToken } = require("../services/jwtMiddleware");

const router = express.Router();

router.get("/learning-objectives", getLearningObjectives);

module.exports = router;
