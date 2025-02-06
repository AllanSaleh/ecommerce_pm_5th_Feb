import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { ProductProvider } from './context/ProductContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/register' element={<Register />} />
                <Route path='/cart' element={<Cart />} />
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
