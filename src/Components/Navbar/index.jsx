import { NavLink } from "react-router-dom";
import { useId } from "react";

const NavRight = [
    { name: 'Shoppiko', path: '/' },
    { name: 'All', path: '/' },
    { name: 'Clothes', path: '/clothes' },
    { name: 'Electronics', path: '/electronics' },
    { name: 'Furnitures', path: '/furnitures' },
    { name: 'Toys', path: '/toys' },
    { name: 'Others', path: '/others' },
];

const NavLeft = [
    { name: 'My Orders', path: '/my-orders' },
    { name: 'My Account', path: '/my-account' },
    { name: 'Sign In', path: '/sign-in' },
];

export function Navbar() {
    const activeStyle = "underline underline-offset-4";

    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
            {/* Parte izquierda */}
            <ul className='flex items-center gap-3'>
                {NavRight.map((component, index) => (
                    <li key={useId} className={index === 0 ? 'font-semibold text-lg' : ''}>
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
                    <li key={useId}>
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
