import { useState } from 'react';
import './App.css';
import { Box, Container, CssBaseline, List, ThemeProvider, Typography, createTheme } from '@mui/material';
import Todo from './components/Todo';

const theme = createTheme();

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ... task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ my: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant='h4'>
            Todo List
          </Typography>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {tasks.map((task) => <Todo task={task} toggleTask={toggleTask} />)}
          </List>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
