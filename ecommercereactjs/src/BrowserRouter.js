import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Category from './views/Category';
import  NavBar from './components/NavBar';
import ItemDetail from './views/ItemDetail'

function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;