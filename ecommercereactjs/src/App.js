import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import  NavBar from '../src/components/NavBar';
import * as MUI from '@mui/material';
import Container from '@mui/material/Container';

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
