import { MantineProvider, ColorScheme, ColorSchemeProvider, Paper } from '@mantine/core';
import { useState } from 'react';

import AppShell from './components/AppShell';
import GlobalStyles from './core/components/GlobalStyles';

function App() {

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{
        colorScheme: colorScheme,
        fontFamily: "roboto"
      }}
      >
        <GlobalStyles />
        <Paper sx={{ height: "100%" }}>
          <AppShell />
        </Paper>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
