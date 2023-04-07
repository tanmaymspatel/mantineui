import { Card, Center, Grid, Progress, RingProgress, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconCheck, IconClockHour5 } from "@tabler/icons-react";

const Phases = [
    {
        id: 1,
        phaseNAme: "Planning",
        progress: 100
    },
    {
        id: 2,
        phaseNAme: "Design",
        progress: 100
    },
    {
        id: 3,
        phaseNAme: "Development",
        progress: 72
    },
    {
        id: 4,
        phaseNAme: "Testing",
        progress: 0
    },
]
/**
 * @returns first section of the dashboard containing progressbar and phases  
 */
function ProgressSection() {
    /**
     * @name RingProgressLabel
     * @param progress phase progress of the respective phase
     * @returns a component that will be in render in labrl prop of the ringprogress
     */
    const RingProgressLabel = (progress: number) => {
        switch (progress) {
            case 100: {
                return (
                    <Center>
                        <ThemeIcon color="teal" variant="light" radius="xl" size={70}>
                            <IconCheck size={22} />
                        </ThemeIcon>
                    </Center>
                )
            }
            case 0: {
                return (
                    <Center>
                        <IconClockHour5 size={115} color="orange" />
                    </Center>
                )
            }
            default: {
                return (
                    <Text color="blue" weight={700} align="center" size="xl">
                        {progress}%
                    </Text>
                )
            }
        }
    }
    /**
     * @name phaseCardFooterText
     * @param progress phase progress of the respective phase
     * @returns Status of the respective phase
     */
    const phaseCardFooterText = (progress: number) => {
        switch (progress) {
            case 100: return "Completed"
            case 0: return "Pending"
            default: return `${progress}% done`
        }
    }
    /**
     * @name ringProgressColor
     * @param progress phase progress of the respective phase
     * @returns color of the circualar progress
     */
    const ringProgressColor = (progress: number) => {
        switch (progress) {
            case 100: return "teal";
            case 0: return "blue";
            default: return "blue";
        }
    }
    // phase card listing
    const phaseCards = Phases.map((phase) => (
        <Grid.Col xs={6} lg={3} key={phase.id}>
            <Stack align="center" spacing={0}>
                <Text fz="lg" fw={700}>{phase.phaseNAme}</Text>
                <RingProgress
                    sections={[{ value: phase.progress, color: ringProgressColor(phase.progress) }]}
                    thickness={phase.progress === 0 ? 0 : 16}
                    label={RingProgressLabel(phase.progress)}
                />
                <Text>{phaseCardFooterText(phase.progress)}</Text>
            </Stack>
        </Grid.Col>
    ))
    return (
        <>
            <div>
                <Progress value={67} label="67%" size="xl" radius="xl" />
            </div>
            <Card shadow="sm" padding="lg" radius="md" my="lg">
                <Grid>
                    {phaseCards}
                </Grid>
            </Card>

        </>
    )
};

export default ProgressSection;
