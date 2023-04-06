import { Avatar, Card, Grid, Group, Stack, Text, ThemeIcon, createStyles, useMantineTheme } from '@mantine/core'
import { IconClipboardList } from '@tabler/icons-react';
import avatar1 from '../../assets/images/avatar-1.png'
import avatar2 from '../../assets/images/avatar-2.jpg'

const useStyle = createStyles(() => ({
    card: {
        backgroundColor: "transparent",
    }
}))

function Statistics() {
    const { classes } = useStyle();
    const theme = useMantineTheme();
    return (
        <Card className={classes.card} radius={0} my="xl" p={0}>
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
                            <Grid.Col sm={3}>
                                <Stack align="center" py={4}>
                                    <h3>Planning</h3>
                                    <Avatar.Group spacing="md">
                                        <Avatar src={avatar1} size={35} radius="xl" />
                                        <Avatar src={avatar2} size={35} radius="xl" />
                                        <Avatar size={35} radius="xl" color="indigo">+3</Avatar>
                                    </Avatar.Group>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col sm={3} md={3}>
                                <Stack align="center" py={4}>
                                    <h3>Design</h3>
                                    <Avatar.Group spacing="md">
                                        <Avatar src={avatar1} size={35} radius="xl" />
                                        <Avatar src={avatar2} size={35} radius="xl" />
                                        <Avatar size={35} radius="xl" color="indigo">+3</Avatar>
                                    </Avatar.Group>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col sm={3} md={3}>
                                <Stack align="center" py={4}>
                                    <h3>Development</h3>
                                    <Avatar.Group spacing="md">
                                        <Avatar src={avatar1} size={35} radius="xl" />
                                        <Avatar src={avatar2} size={35} radius="xl" />
                                        <Avatar size={35} radius="xl" color="indigo">+3</Avatar>
                                    </Avatar.Group>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col sm={3} md={3}>
                                <Stack align="center" py={4}>
                                    <h3>Testing</h3>
                                    <Avatar.Group spacing="md">
                                        <Avatar src={avatar1} size={35} radius="xl" />
                                        <Avatar src={avatar2} size={35} radius="xl" />
                                        <Avatar size={35} radius="xl" color="indigo">+3</Avatar>
                                    </Avatar.Group>
                                </Stack>
                            </Grid.Col>
                        </Grid>
                    </Card>
                </Grid.Col>
            </Grid>
        </Card>
    )
};

export default Statistics;
