import { useState } from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';

import Sidebar from '../core/components/Sidebar';
import AppHeader from '../core/components/AppHeader';
import Routing from '../core/components/Routing';
/**
 * @returns layout of the application 
 */
function AppShellComponent() {
    // subscription of the theme object
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={<Sidebar opened={opened} />}
            header={<AppHeader opened={opened} setOpened={setOpened} />}
        >
            <Routing />
        </AppShell>
    );
}

export default AppShellComponent;

