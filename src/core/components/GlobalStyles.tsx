import { Global } from '@mantine/core';
/**
 * @returns Global styles for the application
 */
function GlobalStyles() {
    return (
        <Global
            styles={() => ({
                '*, *::before, *::after': {
                    boxSizing: 'border-box',
                },
                'html,body,#root,.App': {
                    height: "100%"
                },
                'html,body': {
                    overflowX: "hidden"
                },
                'body': {
                    margin: 0
                },
            })}
        />
    )
};

export default GlobalStyles;
