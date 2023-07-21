import Link from "next/link";
import React from "react";
import {
  AiOutlineHeart,
  AiFillCaretDown,
  AiOutlineFileDone,
  AiFillCar,
} from "react-icons/ai";
import { HiUserCircle, HiOutlineCash } from "react-icons/hi";
import { BiBuildings } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { LuBookMinus } from "react-icons/lu";
import { VscPreview } from "react-icons/vsc";
import { MdOutlineLogin } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
    <div className="bg-white gap-4 py-8 z-10 flex flex-none justify-between">
      <Link href={"/"} className="flex text-3xl gap-2 items-center ml-20">
        <div className="bg-red-500 h-12 w-12 rotate-45 rounded-lg absolute"></div>
        <h1 className="font-bold ml-4 mr-4 z-30 text-white">S</h1>
        <h1 className="font-bold italic text-violet-950">SpinnyD</h1>
      </Link>
      <div className="flex text-lg font-semibold text-violet-950 items-center">
        <ul className="flex mx-16 gap-8 flex-none">
          <li className="cursor-pointer group/item">
            <div className="flex gap-1">
              Buy Car
              <span className="my-2 group-hover/item:rotate-180 transition-all duration-500">
                <AiFillCaretDown />
              </span>
            </div>
            <div className="absolute bg-white w-2/6 rounded shadow right-48 top-16 z-30 invisible group-hover/item:visible opacity-0 group-hover/item:opacity-100 transition-all duration-500">
              <div className="flex">
                <div className="w-1/2">
                  <h5 className="text-sm text-gray-400 p-4">Popular Cities</h5>
                  <ul>
                    <li className="hover:bg-gray-100 p-4 px-8">Delhi NCR</li>
                    <li className="hover:bg-gray-100 p-4 px-8">Banglore</li>
                    <li className="hover:bg-gray-100 p-4 px-8">Hydrabab</li>
                    <li className="hover:bg-gray-100 p-4 px-8">Mumbai</li>
                    <li className="hover:bg-gray-100 p-4 px-8">Pune</li>
                    <li className="hover:bg-gray-100 p-4 px-8">Delhi</li>
                    <li className="hover:bg-gray-100 p-4 px-8">Gurgaon</li>
                    <li className="hover:bg-gray-100 p-4 px-8">Noida</li>
                    <li className="hover:bg-gray-100 p-4 px-8">Ahmedabad</li>
                    <li className="hover:bg-gray-100 p-4 px-8">Chennai</li>
                    <li className="hover:bg-gray-100 p-4 px-8">Kolkata</li>
                    <li className="hover:bg-gray-100 p-4 px-8">Lucknow</li>
                    <li className="hover:bg-gray-100 p-4 px-8">Jaipur</li>
                  </ul>
                </div>
                <div className="w-1/2 bg-gray-200">
                  <h5 className="text-sm text-gray-400 p-4">Other Cities</h5>
                  <ul>
                    <li className="hover:bg-gray-100 p-4 px-8">Chandigarh</li>
                    <li className="hover:bg-gray-100 p-4 px-8">Coimbatore</li>
                    <li className="hover:bg-gray-100 p-4 px-8">Ghaziabad</li>
                    <li className="hover:bg-gray-100 p-4 px-8">Indore</li>
                    <li className="hover:bg-gray-100 p-4 px-8">Kochi</li>
                    <li className="hover:bg-gray-100 p-4 px-8">Surat</li>
                    </ul>
                </div>
              
              </div>
            </div>
          </li>
          <li className="cursor-pointer group/item">
            <div className="flex gap-1">
              More
              <span className="my-2 group-hover/item:rotate-180 transition-all duration-500">
                <AiFillCaretDown />
              </span>
            </div>
            <div className="absolute bg-white w-64 rounded shadow right-96 top-16 z-30 invisible group-hover/item:visible opacity-0 group-hover/item:opacity-100 transition-all duration-500">
              <ul className="py-4">
                <li className="p-2 hover:bg-gray-200 group/li px-10">
                  <BiBuildings className="inline text-2xl mr-2 text-gray-400" />
                  About Us
                </li>
                <li className="p-2 hover:bg-gray-200 group/li  px-10">
                  <HiOutlineCash className="inline text-2xl mr-2 text-gray-400" />
                  Car Finace
                </li>
                <li className="p-2 hover:bg-gray-200 group/li px-10">
                  <AiOutlineFileDone className="inline text-2xl mr-2 text-gray-400" />
                  How It Work
                </li>
                <li className="p-2 hover:bg-gray-200 group/li px-10">
                  <CiLocationOn className="inline text-2xl mr-2 text-gray-400" />
                  Car Hub Location
                </li>
                <li className="border-t-2 border-b-2 border-gray-100 py-2">
                  <ul>
                    <li className="p-2 hover:bg-gray-200 group/li px-10">
                      <LuBookMinus className="inline text-2xl mr-2 text-gray-400" />
                      Blog
                    </li>
                    <li className="p-2 hover:bg-gray-200 group/li px-10">
                      <VscPreview className="inline text-2xl mr-2 text-gray-400" />
                      Customer Review
                    </li>
                    <li className="p-2 hover:bg-gray-200 group/li px-10">
                      <AiFillCar className="inline text-2xl mr-2 text-gray-400" />
                      Car Valuation
                    </li>
                  </ul>
                </li>

                <li className="p-2 hover:bg-gray-200 group/li my-2 px-10">
                  SpinnyD Assured
                  <p className="text-xs text-gray-400 group-hover/li:text-purple-600">
                    The sure Road To Car Joy
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-200 group/li border-t-2 border-gray-100 px-10">
                  SpinnyD BuyBack
                  <p className="text-xs text-gray-400 group-hover/li:text-purple-600">
                    Commit less, Drive More
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className="text-4xl text-violet-800 cursor-pointer">
            <AiOutlineHeart />
          </li>
          <li className="cursor-pointer group/item">
            <div>
              <div className="text-xs">Hello,Sign in</div>
              <div className="flex gap-1">
                Account
                <span className="my-2 group-hover/item:rotate-180 transition-all duration-500">
                  <AiFillCaretDown />
                </span>
              </div>
            </div>
            <div className="absolute bg-white w-56 text-center rounded shadow right-56 z-30 opacity-0 invisible group-hover/item:visible group-hover/item:opacity-100 transition-all duration-500">
              <ul className="py-4">
                <li className="p-2 hover:bg-gray-200 group/li">
                  <HiUserCircle className="inline text-2xl mr-2 text-gray-200 group-hover/li:text-purple-600" />
                  Your Account
                </li>
                <li className="p-2 border-t-2 border-gray-100">
                  <MdOutlineLogin className="inline text-2xl mr-2" />
                  Login/Sign up
                </li>
              </ul>
            </div>
          </li>
          <li className="cursor-pointer">
            <div className="text-red-500 px-2 border-l-2 border-gray-400">
              <div className="text-xs">Call us at</div>
              <div className="whitespace-nowrap">727-727-7275</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
      {/* <img src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SellCar/assets/sell_landing_back_desktop.jpg" /> */}
      </div>
  );
};

export default Navbar;
