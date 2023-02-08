import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import  NavBar from '../src/components/NavBar';
import Container from '@mui/material/Container';
import ItemListContainer  from '../src/components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <Container maxWidth={false}>
        <CssBaseline />
        <NavBar></NavBar>
        <ItemListContainer greeting="Querido Usuario"/>
      </Container>
    </div>
  );
}

export default App;
