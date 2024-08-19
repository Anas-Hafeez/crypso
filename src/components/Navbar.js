import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div className="border shadow-2xl  bg-yellow-400">
            <nav className="flex justify-between px-4 items-center">
              <Link to={"/"}>  <h1 className="text-[50px] font-extrabold cursor-pointer">myCrypto<span className="text-blue-900">Tracker</span></h1></Link>
                <navitem className="flex gap-4 text-[20px]" >
                    <Link to={"/Top10"}>
                    <p className="hover:text-blue-800 font-extrabold">top10</p>
                    </Link>
                    <Link to={"/Trending"}>
                    <p className="hover:text-blue-800 font-extrabold">trending</p>
                    </Link>
                    <Link to={"/Popular"}>
                    <p className="hover:text-blue-800 font-extrabold">popular</p>
                    </Link>
                    <Link to={"/Watchlist"}>
                    <p className="hover:text-blue-800 font-extrabold">watchlist</p>
                    </Link>
                    
                </navitem>
            </nav>
        </div>
    );
}
    export default Navbar;
