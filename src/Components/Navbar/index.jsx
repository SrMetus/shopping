import { NavLink } from "react-router-dom";
import { useShoppingCard } from "../../Hooks/useShoppingCard";
import { v4 as uuidv4 } from "uuid";

const NavRight = [
  { id: uuidv4(), name: "Shoppiko", path: "/" },
  { id: uuidv4(), name: "All", path: "/" },
  { id: uuidv4(), name: "Clothes", path: "/clothes" },
  { id: uuidv4(), name: "Electronics", path: "/electronics" },
  { id: uuidv4(), name: "Furnitures", path: "/furnitures" },
  { id: uuidv4(), name: "Toys", path: "/toys" },
  { id: uuidv4(), name: "Others", path: "/others" },
];

const NavLeft = [
  { id: uuidv4(), name: "My Orders", path: "/my-orders" },
  { id: uuidv4(), name: "My Account", path: "/my-account" },
  { id: uuidv4(), name: "Sign In", path: "/sign-in" },
];

export function Navbar() {
  const activeStyle = "underline underline-offset-4";
  const { count } = useShoppingCard();

  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
      {/* Parte izquierda */}
      <ul className="flex items-center gap-3">
        {NavRight.map((component, index) => (
          <li
            key={component.id}
            className={index === 0 ? "font-semibold text-lg" : ""}
          >
            <NavLink
              to={component.path}
              className={({ isActive }) =>
                isActive && index !== 0 ? activeStyle : ""
              }
            >
              {component.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Parte derecha */}
      <ul className="flex items-center gap-3">
        <li className="flex items-center text-black/70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          +569-44446177
        </li>
        <li className="flex items-center text-black/70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          s.gaggero87@gmail.com
        </li>
        {NavLeft.map((component) => (
          <li key={component.id}>
            <NavLink to={component.path}>{component.name}</NavLink>
          </li>
        ))}
        <li className="flex items-center text-lg">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </span>
          <span className="flex items-center justify-center text-sm text-white rounded-full bg-orange-500 w-4 h-4">
            {count}
          </span>
        </li>
      </ul>
    </nav>
  );
}
