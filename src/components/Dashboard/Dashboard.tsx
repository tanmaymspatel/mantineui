import ProgressSection from "./ProgressSection";
import ProjectInfo from "./ProjectInfo";
import Statistics from "./Statistics";
/**
 * @returns Dashboard of the project 
 */
function Dashboard() {
    return (
        <>
            <ProgressSection />
            <Statistics />
            <ProjectInfo />
        </>
    )
};

export default Dashboard;
