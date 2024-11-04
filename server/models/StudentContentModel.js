const {query} = require("../db/db-config")

const learningObjectivesQuery = async(projectId) => {
    const sql = `SELECT learning_objective FROM project WHERE project_id = ?`
    const [result] = await query(sql, [projectId])
    if(result.length === 0){
        throw new Error("Content not found")
    }

    return result
    
}

module.exports = {
  learningObjectivesQuery
}