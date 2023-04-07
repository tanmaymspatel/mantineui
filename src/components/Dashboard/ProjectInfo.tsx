import { Card, Grid, createStyles } from "@mantine/core";
import TasklistTable from "./TasklistTable";
import ProjectDetails from "./ProjectDetails";
// custom styles
const useStyle = createStyles(() => ({
    card: {
        backgroundColor: "transparent",
    }
}))
/**
 * @returns third section of the dashboard containing task table and project information
 */
function ProjectInfo() {
    const { classes } = useStyle();

    return (
        <Card className={classes.card} radius={0} my="lg" p={0}>
            <Grid>
                <Grid.Col md={8}>
                    <Card shadow="sm" padding="lg" radius="md">
                        <h4>Tasks</h4>
                        <TasklistTable />
                    </Card>
                </Grid.Col>
                <Grid.Col md={4}>
                    <Card shadow="sm" padding="lg" radius="md">
                        <ProjectDetails />
                    </Card>
                </Grid.Col>
            </Grid>
        </Card>
    )
}

export default ProjectInfo;
