import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import "./index.css"

const AppRoutes = () => {

  let routes = useRoutes([
    { path: 'https://full-stack-project-liart.vercel.app/',  element: <Home />},
    { path: 'https://full-stack-project-liart.vercel.app/my-account',  element: <MyAccount />},
    { path: 'https://full-stack-project-liart.vercel.app/my-order',  element: <MyOrder />},
    { path: 'https://full-stack-project-liart.vercel.app/my-orders',  element: <MyOrders />},
    { path: 'https://full-stack-project-liart.vercel.app/*',  element: <NotFound />},
    { path: 'https://full-stack-project-liart.vercel.app/sign-in',  element: <SignIn />},
  ])

  return routes
}

const App = () => {

  return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  )
}

export default App
