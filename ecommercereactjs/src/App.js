import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import  NavBar from '../src/components/NavBar';
import Container from '@mui/material/Container';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <Container maxWidth={false}>
        <CssBaseline />
        <NavBar></NavBar>
      </Container>
    </div>
  );
}

export default App;
