import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">amazona</Link>
        </header>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:slug" element={<ProductScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
