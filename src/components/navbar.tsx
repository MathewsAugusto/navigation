import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function NavBar() {
  const [menu, setMenu] = useState(true);

  return (
    <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2x1 font-[Poppins] cursor-pointer">
          <img
            className="h-10 inline"
            src="https://m.media-amazon.com/images/I/41ephxOr7TL._SX300_SY300_QL70_FMwebp_.jpg"
            alt=""
          />
          Navigation
        </span>
        <span className="text-3x1 cursor-pointer mx-2 md:hidden block ">
          {menu == true ? (
            <Menu
              onClick={() => {
                let navM = document.querySelector("ul");
                navM?.classList.add("top-[80px]");
                navM?.classList.add("opacity-100");
                navM?.classList.remove("opacity-0");

                setMenu(false);
              }}
            />
          ) : (
            <X
              onClick={() => {
                let navM = document.querySelector("ul");
                navM?.classList.remove("top-[80px]");
                navM?.classList.remove("opacity-100");
                navM?.classList.add("opacity-0");

                setMenu(true);
              }}
            />
          )}
        </span>
      </div>

      <ul
        className="md:flex md:items-center z-[1] md:z-auto md:static bg-white
              w-full left-0S md:w-auto md:py-0 py-4 md:pl-0 pl-7 left-0  
      top-[-400px] transition-all ease-in duration-500 md:opacity-100 opacity-0 absolute"
      >
        <li className="mx-4 my-6 md:my-0">
          <Link
            className="text-xl hover:text-cyan-500 duration-500"
            to={"/home"}
          >
            Home
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            className="text-xl hover:text-cyan-500 duration-500"
            to={"/contacts"}
          >
            Contatos
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Button className="bg-green-400">
            <Link
              className="text-xl hover:text-cyan-500 duration-500"
              to={"/login"}
            >
              Login
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
