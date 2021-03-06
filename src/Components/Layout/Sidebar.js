import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineKitchen,
  MdLogin,
  MdOutlineLocalBar,
  MdOutlineAddBox,
  MdPeopleOutline,
  MdOutlineSettings,
} from "react-icons/md";
import { BiBookAlt } from "react-icons/bi";
import DataContext from "../store/storeContext";
import Logo from "../assests/La-Parrilla-load-Logo.png";
import { MenuIcon } from "@heroicons/react/solid";

const Sidebar = () => {
  const dataCtx = useContext(DataContext);
  const toggle = dataCtx.toggle;
  const toggleHandler = dataCtx.toggleHandler;
  const openModalHandler = dataCtx.openModalHandler

  return (
    <div>
      <div
        className={
          toggle
            ? "md:bg-[#003F5A] md:w-[60px] md:h-[100vh] md:fixed md:z-20 md:top-[108px] md:block hidden"
            : "hidden"
        }
      >
        <ul>
          <Link to="/addrecipes">
            <li className="mb-4  h-12 w-full flex items-center justify-center cursor-pointer hover:bg-[#024E6E]">
              <MdOutlineAddBox color="#BFBFBF" size={25} />
            </li>
          </Link>

          <Link to="/allrecipes">
            <li className="mb-4  h-12 w-full flex items-center justify-center cursor-pointer hover:bg-[#024E6E]">
              <BiBookAlt color="#BFBFBF" size={25} />
            </li>
          </Link>

          <Link to="/barrecipes">
            <li className="mb-4  h-12 w-full flex items-center justify-center cursor-pointer hover:bg-[#024E6E]">
              <MdOutlineLocalBar color="#BFBFBF" size={25} />
            </li>
          </Link>

          <Link to="/kitchenrecipes">
            <li className="mb-4  h-12 w-full flex items-center justify-center cursor-pointer hover:bg-[#024E6E]">
              <MdOutlineKitchen color="#BFBFBF" size={25} />
            </li>
          </Link>

          <Link to="/users">
            <li className="mb-4  h-12 w-full flex items-center justify-center cursor-pointer hover:bg-[#024E6E]">
              <MdPeopleOutline color="#BFBFBF" size={25} />
            </li>
          </Link>

          <Link
            to="/edit"
            state={{
              id:"", userName:"", name:"", accessLevel:"", email:""
             }}
          >
            <li className="mb-[100px] h-12 w-full flex items-center justify-center cursor-pointer hover:bg-[#024E6E]">
              <MdOutlineSettings color="#BFBFBF" size={25} />
            </li>
          </Link>

         
            <li onClick={openModalHandler} className="h-12 w-full flex items-center justify-center cursor-pointer hover:bg-[#024E6E]">
              <MdLogin color="#BFBFBF" size={25} />
            </li>
         
        </ul>
      </div>






      <div
        className={
          !toggle ? "bg-[#003F5A] w-[200px] h-[100vh] fixed z-20" : "hidden"
        }
      >
        <div className="flex items-end pl-[20px] py-[20px]">
          <div className="pr-6 mb-1 ">
            <MenuIcon
              className=" w-7 cursor-pointer text-[#BFBFBF]"
              onClick={toggleHandler}
            />
          </div>

          <div>
            <Link to="/allrecipes">
              <img
                src={Logo}
                alt="Logo"
                className="w-[120px] "
                onClick={toggleHandler}
              />
            </Link>
          </div>
        </div>

        <ul>
          <Link to="/addrecipes">
            <li className="mb-4 h-12 w-full flex items-center pl-[18px] cursor-pointer hover:bg-[#024E6E]"  onClick={toggleHandler}>
              <MdOutlineAddBox color="#BFBFBF" size={25} />
              <p className="text-[14px] text-[#BFBFBF] ml-2">Add recipes</p>
            </li>
          </Link>

          <Link to="/allrecipes">
            <li className="mb-4 h-12 w-full flex items-center pl-[18px] cursor-pointer hover:bg-[#024E6E]"  onClick={toggleHandler}>
              <BiBookAlt color="#BFBFBF" size={25} />
              <p className="text-[14px] text-[#BFBFBF] ml-2">All recipes</p>
            </li>
          </Link>

          <Link to="/barrecipes">
            <li className="mb-4  h-12 w-full flex items-center pl-[18px] cursor-pointer hover:bg-[#024E6E]"  onClick={toggleHandler}>
              <MdOutlineLocalBar color="#BFBFBF" size={25} />
              <p className="text-[14px] text-[#BFBFBF] ml-2">Bar recipes</p>
            </li>
          </Link>

          <Link to="/kitchenrecipes">
            <li className="mb-4  h-12 w-full flex items-center pl-[18px] cursor-pointer hover:bg-[#024E6E]"  onClick={toggleHandler}>
              <MdOutlineKitchen color="#BFBFBF" size={25} />
              <p className="text-[14px] text-[#BFBFBF] ml-2">Kitchen recipes</p>
            </li>
          </Link>

          <Link to="/users">
            <li className="mb-4  h-12 w-full flex items-center pl-[18px] cursor-pointer hover:bg-[#024E6E]"  onClick={toggleHandler}>
              <MdPeopleOutline color="#BFBFBF" size={25} />
              <p className="text-[14px] text-[#BFBFBF] ml-2">Users</p>
            </li>
          </Link>

          <Link
             to="/edit"
             state={{
               id:"", userName:"", name:"", accessLevel:"", email:""
              }}
          >
            <li className="mb-[100px]  h-12 w-full flex items-center pl-[18px] cursor-pointer hover:bg-[#024E6E]"  onClick={toggleHandler}>
              <MdOutlineSettings color="#BFBFBF" size={25} />
              <p className="text-[14px] text-[#BFBFBF] ml-2">Settings</p>
            </li>
          </Link>

         
            <li  className="  h-12 w-full flex items-center pl-[18px] cursor-pointer hover:bg-[#024E6E]"  onClick={openModalHandler}>
              <MdLogin color="#BFBFBF" size={25} />
              <p className="text-[14px] text-[#BFBFBF] ml-2">Logout</p>
            </li>
        
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
