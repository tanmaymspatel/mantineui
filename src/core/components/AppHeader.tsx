import { createStyles, Header, MediaQuery, Burger, useMantineTheme, Group, Code, ActionIcon } from '@mantine/core';

import DarkMode from './DarkMode';
import { MantineLogo } from '@mantine/ds';
import { IconCalendar, IconMail, IconUser } from '@tabler/icons-react';
// custom styles
const useStyles = createStyles((theme) => ({
    header: {
        paddingBottom: theme.spacing.md,
        marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    },
    code: {
        fontWeight: 700
    }
}))
/**
 * @returns Header of the application
 */
function AppHeader({ opened, setOpened }: any) {

    const { classes } = useStyles();
    const theme = useMantineTheme();

    return (
        <Header height={{ base: 60, md: 70 }} p="md">
            <div style={{ display: 'flex', justifyContent: "space-between", height: "100%" }}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o: boolean) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MediaQuery>
                <Group className={classes.header} position="apart">
                    <MantineLogo size={28} />
                    <Code className={classes.code}>v3.1.2</Code>
                </Group>
                <Group>
                    <ActionIcon variant="light" p={4} radius="xl"><IconMail size="1.75rem" /></ActionIcon>
                    <ActionIcon variant="light" p={4} radius="xl"><IconCalendar size="1.75rem" /></ActionIcon>
                    <ActionIcon variant="light" p={4} radius="xl"><IconUser size="1.75rem" /></ActionIcon>
                    <DarkMode />
                </Group>
            </div>
        </Header>
    )
};

export default AppHeader;
