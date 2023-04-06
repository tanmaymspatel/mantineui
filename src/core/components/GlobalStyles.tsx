import { Global } from '@mantine/core';

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
                // 'html,body': {
                //     overflow: "hidden"
                // },
                'body': {
                    margin: 0
                },
            })}
        />
    )
};

export default GlobalStyles;
