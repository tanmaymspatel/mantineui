import { useState } from 'react';
import { createStyles, Navbar, getStylesRef, rem } from '@mantine/core';
import {
    IconSwitchHorizontal,
    IconLogout,
    IconLayoutDashboard,
    IconTable,
} from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
// custom styles
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
];
/**
 * @returns Sidebar of the application 
 */
function Sidebar({ opened }: any) {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('Dashboard');

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