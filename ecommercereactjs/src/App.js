import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppRouter from './BrowserRouter';

function App() {
  return (
    <div className="App">
      <Container maxWidth={false}>
        <CssBaseline />
        <AppRouter/>
      </Container>
    </div>
  );
}

export default App;
