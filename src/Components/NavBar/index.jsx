import {NavLink } from 'react-router-dom'

const Navbar = () =>{
    const activeStyle = 'underline underline-offset-4';

    return(
        <nav className='flex w-full py-5 px-8 text-sm justify-between items-center fixed z-10'>
            <ul className='flex justify-between items-center gap-3'>
                <li className=' text-xl font-semibold'>
                    <NavLink
                    to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li >
                    <NavLink  
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }
                    to='/'>
                        All
                    </NavLink>
                </li>
                <li >
                    <NavLink  
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }
                    to='/clothes'>
                        Clothes
                    </NavLink>
                </li>
                <li >
                    <NavLink  
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }
                    to='/electronics'>
                        Electronics
                    </NavLink>
                </li>
                <li >
                    <NavLink  
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }
                    to='/Furnitures'>
                        Furnitures
                    </NavLink>
                </li>
                <li >
                    <NavLink  
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }
                    to='/toys'>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink  
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }
                    to='/others'>
                        Others
                    </NavLink>
                </li>

            </ul>

            <ul className='flex gap-3 justify-between items-center'>
                <li >
                    <NavLink  
                        className='text-black/60'
                    to='/email'>
                        email
                    </NavLink>
                </li>
                <li >
                    <NavLink  
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }
                    to='/my-account'>
                        My Account
                    </NavLink>
                </li>
                <li >
                    <NavLink  
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }
                    to='/my-order'>
                        My Order
                    </NavLink>
                </li>
                <li >
                    <NavLink  
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }
                    to='/my-orders'>
                        My Orders
                    </NavLink>
                </li>
                <li >
                    <NavLink  
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                    }
                    to='/sign-in'>
                        Sign In
                    </NavLink>
                </li>   
                <li >
                    Carrito de compras
                </li>               

            </ul>
        </nav>
    )
}


export default Navbar