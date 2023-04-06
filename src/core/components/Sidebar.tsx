// import {
//     Navbar,
//     Text,
//     Flex
// } from '@mantine/core';
// import { NavLink } from 'react-router-dom';

// function Sidebar({ opened }: any) {
//     return (
//         <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 250 }}>
//             <Navbar.Section grow mt="lg">
//                 <Flex
//                     direction="column"
//                 >
//                     <Text component={NavLink} p={8} variant='link' to="/">Table</Text>
//                     <Text component={NavLink} p={8} variant='link' to="/title1">Example 2</Text>
//                     <Text component={NavLink} p={8} variant='link' to="/title2">Example 3</Text>
//                     <Text component={NavLink} p={8} variant='link' to="/title3">Example 4</Text>
//                 </Flex>
//             </Navbar.Section>
//             <Navbar.Section>
//                 <Text>Navbar footer</Text>
//             </Navbar.Section>
//         </Navbar>
//     )
// }

// export default Sidebar


import { useState } from 'react';
import { createStyles, Navbar, getStylesRef, rem } from '@mantine/core';
import {
    IconFingerprint,
    IconKey,
    IconSettings,
    Icon2fa,
    IconDatabaseImport,
    IconSwitchHorizontal,
    IconLogout,
    IconLayoutDashboard,
    IconTable,
} from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    header: {
        paddingBottom: theme.spacing.md,
        marginBottom: `calc(${theme.spacing.md} * 1.5)`,
        borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,
    },

    footer: {
        paddingTop: theme.spacing.md,
        marginTop: theme.spacing.md,
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,
    },

    link: {
        ...theme.fn.focusStyles(),
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: theme.fontSizes.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,

            [`& .${getStylesRef('icon')}`]: {
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,
            },
        },
    },

    linkIcon: {
        ref: getStylesRef('icon'),
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        marginRight: theme.spacing.sm,
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
            [`& .${getStylesRef('icon')}`]: {
                color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
            },
        },
    },
}));

const data = [
    { link: '/', label: 'Dashboard', icon: IconLayoutDashboard },
    { link: '/table', label: 'Table', icon: IconTable },
    // { link: '/security', label: 'Security', icon: IconFingerprint },
    // { link: '/ssh-keys', label: 'SSH Keys', icon: IconKey },
    // { link: '/database', label: 'Databases', icon: IconDatabaseImport },
    // { link: '/auth', label: 'Authentication', icon: Icon2fa },
    // { link: '/other-settings', label: 'Other Settings', icon: IconSettings },
];

function Sidebar({ opened }: any) {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('table');

    const links = data.map((item) => (
        <NavLink
            className={cx(classes.link, { [classes.linkActive]: item.label === active })}
            to={item.link}
            key={item.label}
            onClick={() => {
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </NavLink>
    ));

    return (
        <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 250, lg: 300 }} p="md">
            <Navbar.Section grow>
                {links}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <NavLink to="/change-account" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
                    <span>Change account</span>
                </NavLink>

                <NavLink to="/logout" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </NavLink>
            </Navbar.Section>
        </Navbar>
    );
}

export default Sidebar;