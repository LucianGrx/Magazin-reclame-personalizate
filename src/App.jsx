import './App.css'
import Home from './pages/Home'
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Success from './components/Success';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { AuthProvider } from './components/AuthProvider';
import OrderHistory from './components/OrderHistory';
import Studio from './pages/Studio/Studio';

const Layout = () => {
  return (
    <div className='app'>
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/", 
    element:<Layout />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
      {
        path: "/studio/:id",
        element: <Studio />
      },
      {
        path: "/success",
        element: <Success />
      },
      {
        path: '/orders',
        element: <OrderHistory />
      }
    ]
  },

])

function App() {


  return (

    <div className="App">
      <AuthProvider>
      <RouterProvider router={router}/>
      </AuthProvider>

    </div>
  )
}

export default App
