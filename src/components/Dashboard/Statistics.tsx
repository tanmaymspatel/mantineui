import { Card, Grid, Group, Stack, Text, ThemeIcon, createStyles } from '@mantine/core'
import { IconClipboardList } from '@tabler/icons-react';
import TeamAvatars from './TeamAvatars';
// custom styles 
const useStyle = createStyles(() => ({
    card: {
        backgroundColor: "transparent",
    }
}));

const Teams = [
    {
        id: 1,
        teamName: "Planning"
    },
    {
        id: 2,
        teamName: "Design"
    },
    {
        id: 3,
        teamName: "Development"
    },
    {
        id: 4,
        teamName: "Testing"
    },
]
/**
 * @returns Second section of the dashboard containing task and team statistics
 */
function Statistics() {

    const { classes } = useStyle();
    // team statistics cards 
    const teamSection = Teams.map((team) => (
        <Grid.Col sm={3} key={team.id}>
            <Stack align="center" py={4}>
                <h3>{team.teamName}</h3>
                <TeamAvatars />
            </Stack>
        </Grid.Col>
    ))

    return (
        <Card className={classes.card} radius={0} my="lg" p={0}>
            <Grid>
                <Grid.Col md={4}>
                    <Card shadow="sm" padding="lg" radius="md">
                        <Group position="apart">
                            <Stack justify="space-between" spacing={36}>
                                <h3>14</h3>
                                <Text component='h3' my={0}>Tasks</Text>
                            </Stack>
                            <ThemeIcon variant="light">
                                <IconClipboardList />
                            </ThemeIcon>
                        </Group>
                    </Card>
                </Grid.Col>
                <Grid.Col md={8}>
                    <Card shadow="sm" padding="lg" radius="md">
                        <Grid>
                            {teamSection}
                        </Grid>
                    </Card>
                </Grid.Col>
            </Grid>
        </Card>
    )
};

export default Statistics;
