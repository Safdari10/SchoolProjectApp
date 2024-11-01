import { createContext, useContext, useState } from "react"

// student sub-page imports
import LearningObjectives from "../../pages/StudentDashboard/subpages/LearningObjectives"
import Instructions from "../../pages/StudentDashboard/subpages/Instructions"
import VideoTutorial from "../../pages/StudentDashboard/subpages/VideoTutorial"
import MakeProject from "../../pages/StudentDashboard/subpages/MakeProject"
import SubmitProject from "../../pages/StudentDashboard/subpages/MakeProject"

// teacher sub-page imports
import ProgressTracker from '../../pages/TeacherDashboard/subpages/ProgressTracker'
import StudentProfiles from '../../pages/TeacherDashboard/subpages/StudentProfiles'
import HelpRequests from '../../pages/TeacherDashboard/subpages/HelpRequests'
import ProjectSubmissions from '../../pages/TeacherDashboard/subpages/ProjectSubmissions'



const RenderContentContex = createContext

 export const RenderContentProvider = ({ dashboardType, children}) => {

const [activeLink, setActiveLink] = useState(dashboardType === "student" ? "learning-objectives" : "progress-tracker" )

const renderContent = () => {
    if (dashboardType === "student") {
        switch (activeLink) {
            case "learning-objectives":
                return <LearningObjectives/>
            case "instructions":
                return <Instructions/>
            case "video-tutorial":
                return <VideoTutorial/>
            case "make-project":
                return <MakeProject/>
            case "submit-project":
                return <SubmitProject/>
            default:
                return          
    }
    } else if (dashboardType === "teacher") {
         switch (activeLink) {
            case "progress-tracker":
              return <ProgressTracker/>
            case "student-profiles":
               return <StudentProfiles/>
            case "help-requests":
               return <HelpRequests/>
            case "project-submissions":
               return <ProjectSubmissions/>
            default:
               return
    }
}
  
}

  return (
    <RenderContentContex.Provider  value={{ activeLink, setActiveLink, renderContent}} >
      {children}
    </RenderContentContex.Provider>
  )
}

export const useRenderContent = () => useContext(RenderContentContex)
