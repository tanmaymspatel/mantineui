import { Global } from '@mantine/core';

function GlobalStyles() {
    return (
        <Global
            styles={(theme) => ({
                '*, *::before, *::after': {
                    boxSizing: 'border-box',
                },
                'html,body,#root,.App': {
                    height: "100%"
                },
                // 'html,body': {
                //     overflow: "hidden"
                // },
                'body': {
                    margin: 0
                },
                'a.active, a:hover': {
                    background: theme.colors.blue[9],
                    color: theme.colors.gray[0]
                }
            })}
        />
    )
};

export default GlobalStyles;
