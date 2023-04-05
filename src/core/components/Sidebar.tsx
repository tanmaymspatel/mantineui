import {
    Navbar,
    Text,
    Flex
} from '@mantine/core';
import { NavLink } from 'react-router-dom';

function Sidebar({ opened }: any) {
    return (
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 250 }}>
            <Navbar.Section grow mt="lg">
                <Flex
                    direction="column"
                >
                    <Text component={NavLink} p={8} variant='link' to="/">Table</Text>
                    <Text component={NavLink} p={8} variant='link' to="/title1">Example 2</Text>
                    <Text component={NavLink} p={8} variant='link' to="/title2">Example 3</Text>
                    <Text component={NavLink} p={8} variant='link' to="/title3">Example 4</Text>
                </Flex>
            </Navbar.Section>
            <Navbar.Section>
                <Text>Navbar footer</Text>
            </Navbar.Section>
        </Navbar>
    )
}

export default Sidebar
