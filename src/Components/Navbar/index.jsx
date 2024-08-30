import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const NavRight = [
    { id: uuidv4(), name: 'Shoppiko', path: '/' },
    { id: uuidv4(), name: 'All', path: '/' },
    { id: uuidv4(), name: 'Clothes', path: '/clothes' },
    { id: uuidv4(), name: 'Electronics', path: '/electronics' },
    { id: uuidv4(), name: 'Furnitures', path: '/furnitures' },
    { id: uuidv4(), name: 'Toys', path: '/toys' },
    { id: uuidv4(), name: 'Others', path: '/others' },
];

const NavLeft = [
    { id: uuidv4(), name: 'My Orders', path: '/my-orders' },
    { id: uuidv4(), name: 'My Account', path: '/my-account' },
    { id: uuidv4(), name: 'Sign In', path: '/sign-in' },
];

export function Navbar() {
    const activeStyle = "underline underline-offset-4";

    return (
        <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light'>
            {/* Parte izquierda */}
            <ul className='flex items-center gap-3'>
                {NavRight.map((component, index) => (
                    <li key={component.id} className={index === 0 ? 'font-semibold text-lg' : ''}>
                        <NavLink 
                            to={component.path} 
                            className={({ isActive }) => (isActive && index !== 0) ? activeStyle : ''}
                        >
                            {component.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            
            {/* Parte derecha */}
            <ul className='flex items-center gap-3'>
                <li className='text-black/70'>
                    📲+569-44446177
                </li>
                <li className='text-black/70'>
                    ✉️s.gaggero87@gmail.com
                </li>
                {NavLeft.map((component) => (
                    <li key={component.id}>
                        <NavLink to={component.path}>
                            {component.name}
                        </NavLink>
                    </li>
                ))}
                <li>
                    🛒 $0
                </li>
            </ul>
        </nav>
    );
}
