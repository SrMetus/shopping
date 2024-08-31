import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar';
import { Layout } from '../../Components/Layout';
import { ShoppingCardProvider } from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import './App.css';

const AppRouter = () =>{
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> },
  ]);

  return routes
}
function App() {
  
  return (
    <ShoppingCardProvider>
      <BrowserRouter>
      <Navbar />
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>
    </ShoppingCardProvider>
  )
}

export default App
