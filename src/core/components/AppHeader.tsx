import { Header, Text, MediaQuery, Burger, useMantineTheme } from '@mantine/core';

import DarkMode from './DarkMode';

function AppHeader({ opened, setOpened }: any) {

    const theme = useMantineTheme();

    return (
        <Header height={{ base: 60, md: 70 }} p="md">
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o: boolean) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MediaQuery>
                <Text>Application header</Text>
                <DarkMode />
            </div>
        </Header>
    )
};

export default AppHeader;
