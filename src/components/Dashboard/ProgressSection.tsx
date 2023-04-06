import { Card, Center, Grid, Progress, RingProgress, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconCheck, IconClockHour5 } from "@tabler/icons-react";

function ProgressSection() {
    return (
        <>
            <div>
                <Progress value={67} label="67%" size="xl" radius="xl" />
            </div>
            <Card shadow="sm" padding="lg" radius="md" my="xl">
                <Grid>
                    <Grid.Col xs={6} lg={3}>
                        <Stack align="center" spacing="xs">
                            <Text fz="lg" fw={700}>Planning</Text>
                            <RingProgress
                                sections={[{ value: 100, color: 'teal' }]}
                                label={
                                    <Center>
                                        <ThemeIcon color="teal" variant="light" radius="xl" size="xl">
                                            <IconCheck size={22} />
                                        </ThemeIcon>
                                    </Center>
                                }
                            />
                            <Text>Done</Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col xs={6} lg={3}><Stack align="center" spacing="xs">
                        <Text fz="lg" fw={700}>Design</Text>
                        <RingProgress
                            sections={[{ value: 100, color: 'teal' }]}
                            label={
                                <Center>
                                    <ThemeIcon color="teal" variant="light" radius="xl" size="xl">
                                        <IconCheck size={22} />
                                    </ThemeIcon>
                                </Center>
                            }
                        />
                        <Text>Done</Text>
                    </Stack></Grid.Col>
                    <Grid.Col xs={6} lg={3}><Stack align="center" spacing="xs">
                        <Text fz="lg" fw={700}>Development</Text>
                        <RingProgress
                            sections={[{ value: 67, color: 'blue' }]}
                            label={
                                <Text color="blue" weight={700} align="center" size="xl">
                                    67%
                                </Text>
                            }
                        />
                        <Text>67% Done</Text>
                    </Stack></Grid.Col>
                    <Grid.Col xs={6} lg={3}><Stack align="center" spacing="xs">
                        <Text fz="lg" fw={700}>Testing</Text>
                        <IconClockHour5 size={115} color="orange" />
                        <Text>Pending</Text>
                    </Stack></Grid.Col>
                </Grid>
            </Card>

        </>
    )
};

export default ProgressSection;
