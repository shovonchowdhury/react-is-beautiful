import { useState } from "react";
import Link from "../Link/Link";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import './Navbar.css'


const Navbar = () => {

    const [open,setOpen]=useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile/:userId', name: 'Profile' }
      ];

    return (
        <nav>
            <div className="text-2xl md:hidden p-2" onClick={()=>setOpen(!open)}>
                {
                    open ? <IoMdClose /> : <TfiMenuAlt />
                }
                
            </div>
            <ul className={`${open ? 'top-7' : '-top-80'} md:flex absolute md:static left-3 bg-stone-400 duration-1000 mx-6 md:mx-0 `}>
            {
                routes.map(route=> <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;