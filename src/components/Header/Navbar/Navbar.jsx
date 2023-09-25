import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div>
            <nav className="flex-row ml-20 md:ml-32 lg:ml-0 md:flex-row lg:flex justify-center lg:justify-between items-center px-2 py-2 lg:py-6 lg:px-5">
                <Logo></Logo>
               <ul className="flex gap-5">
                <li>
                    <NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 underline" : ""}>Home</NavLink>
                </li>
                <li>
                <NavLink to='/donation' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 underline" : ""}>Donation</NavLink>
                </li>
                <li>
                <NavLink to='/statistics' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 underline" : ""}>Statistics</NavLink>
                </li>
               </ul>
            </nav>
        </div>
    );
};

export default Navbar;