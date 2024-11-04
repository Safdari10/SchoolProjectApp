const { learningObjectivesQuery } = require("../models/StudentContentModel");

const getLearningObjectives = async (req, res) => {
  try {
    const projectId = req.query.project_id;

    if (!projectId) {
      return res.status(400).json({ message: "Project ID is required" });
    }

    const result = await learningObjectivesQuery(projectId);
    // console.log('Fetched result:', result)


    res.json(result); 

  } catch (error) {
    if (error.message === "Content not found") {
      res.status(404).json({ message: "Content not found" });
    } else {
      console.error("Error fetching learning objectives content", error);
      res.status(500).json({ message: "An error occurred while retrieving learning objectives data. Please try again later." });
    }
  }
};

module.exports = {
  getLearningObjectives,
};
