import { useState } from 'react';
import './App.css';
import { Box, Container, CssBaseline, List, ThemeProvider, Typography, createTheme } from '@mui/material';

const theme = createTheme();

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box sx={{ my: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant='h2'>
            Todo List
          </Typography>
          <List>
            {tasks.map((task) => {})}
          </List>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
