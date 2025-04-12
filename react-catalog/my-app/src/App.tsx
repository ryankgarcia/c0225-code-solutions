import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { NotFound } from './Pages/NotFound';
import { About } from './Pages/About';
import { Catalog } from './Pages/Catalog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        {/* <Route path="details/:productId" element={<ProductDetails />} /> */}
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
