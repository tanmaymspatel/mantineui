import { Divider, Group, Stack, Text, ThemeIcon, createStyles, em, getBreakpointValue } from "@mantine/core";
import { IconClockHour5, IconCurrencyRupee } from "@tabler/icons-react";
// custom styles
const useStyles = createStyles((theme) => ({
    group: {
        padding: "1.5rem 1.25rem",

        [`@media (min-width: ${em(getBreakpointValue(theme.breakpoints.sm) - 1)})`]: {
            padding: "1.85rem 3rem",
        }
    }
}))
/**
 * @returns card showing basic project details
 */
function ProjectDetails() {

    const { classes } = useStyles();

    return (
        <Stack>
            <Group position="apart" className={classes.group}>
                <ThemeIcon color="teal" variant="light" radius="xl" size={50}>
                    <IconClockHour5 size={30} />
                </ThemeIcon>
                <Stack spacing="xs">
                    <Text component="h6" my={0}>Duration</Text>
                    <Text component="h4" my={0}>14 Months</Text>
                </Stack>
            </Group>
            <Divider my={12} />
            <Group position="apart" className={classes.group}>
                <ThemeIcon color="blue" variant="light" radius="xl" size={50}>
                    <IconCurrencyRupee size={30} />
                </ThemeIcon>
                <Stack spacing={8}>
                    <Text component="h6" my={0}>Cost</Text>
                    <Text component="h4" my={0}>12 Lakhs</Text>
                </Stack>
            </Group>
        </Stack>
    )
};

export default ProjectDetails;
