
const Link = ({route}) => {
    return (
        
            <li className=" hover:bg-sky-400 px-10 py-4 font-bold text-xl md:px-6 hover:text-white">
                    <a href={route.path}>{route.name}</a>
            </li>
        
    );
};

export default Link;