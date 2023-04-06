import { ActionIcon, Box, Center, Group, SegmentedControl, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon, IconMoonStars } from '@tabler/icons-react';

function DarkMode() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    return (
        <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
        >
            {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
        </ActionIcon>
        // <Group position="center" my="xl" style={{ margin: 0 }}>
        //     <SegmentedControl
        //         value={colorScheme}
        //         onChange={(value: 'light' | 'dark') => toggleColorScheme(value)}
        //         data={[
        //             {
        //                 value: 'light',
        //                 label: (
        //                     <Center>
        //                         <IconSun size="1rem" stroke={1.5} />
        //                         <Box ml={10}>Light</Box>
        //                     </Center>
        //                 ),
        //             },
        //             {
        //                 value: 'dark',
        //                 label: (
        //                     <Center>
        //                         <IconMoon size="1rem" stroke={1.5} />
        //                         <Box ml={10}>Dark</Box>
        //                     </Center>
        //                 ),
        //             },
        //         ]}
        //     />
        // </Group>
    );
}

export default DarkMode
