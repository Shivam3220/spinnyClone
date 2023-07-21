import Brand from "@/components/Brand";
import KmDrive from "@/components/KmDrive";
import Model from "@/components/Model";
import Owner from "@/components/Owner";
import Rto from "@/components/Rto";
import Varient from "@/components/Varient";
import When from "@/components/When";
import Year from "@/components/Year";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddDetails } from "../ReduxStore/actions/UserReduxAction";
import { useRouter } from "next/router";

const index = () => {
  const carDetail = useSelector((state) => state.car);
  const [CarDetailsS, setCarDetailsS] = useState(carDetail.car);
  const [Msg, setMsg] = useState("");
  const [Navigator, setNavigator] = useState(0);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(AddDetails(CarDetailsS));
    setMsg("");
  }, [CarDetailsS]);

  const HandleSetClick = (e, value, name) => {
    e.preventDefault();
    if (CarDetailsS[name] != "") {
      setNavigator(value);
    } else {
      setMsg("Please fill this first");
    }
  };
  const HandleNavigate = () => {
    const { brand, rto, year, model, varient, owner, kmDrive, when } =
      CarDetailsS;
    if (
      brand != "" &&
      rto != "" &&
      year != "" &&
      model != "" &&
      varient != "" &&
      kmDrive != "" &&
      when != "" &&
      owner != ""
    ) {
      router.push("/details");
    } else {
      setMsg("Please fill all the Details");
    }
  };
  return (
    <div className="relative z-10">
      <div className="md:w-2/3 m-auto">
        <div className=" text-center ">
          <img
            className="w-64 m-auto"
            aria-hidden="CarDetailsS.brand"
            src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SellCar/assets/sell_right.svg?w=800&dpr=1.4"
            alt="Sell Right By Spinny"
          />
        <h1 className="text-white text-4xl font-semibold">
          Check your car's&nbsp;price in 10 secs&nbsp;
        </h1>
        <h1 className="text-white text-lg text-center font-semibold ">
          Just Few More Steps to go
        </h1>
        <h1 className="text-red-500 text-lg text-center font-semibold my-2 h-8">
          {Msg}
        </h1>
        </div>
      <span className="bg-gray-100">
        <ul className="flex m-auto shadow rounded flex-none">
          <li
            onClick={(e) => HandleSetClick(e, 0, "brand")}
            className="bg-white  w-32 py-4 px-2 cursor-pointer hover:bg-gray-200 rounded-l"
          >
            Brand
            <p className="text-gray-500 text-sm">
              {CarDetailsS.brand != "" ? CarDetailsS.brand : "Select"}
            </p>
          </li>
          <li
            onClick={(e) => HandleSetClick(e, 1, "rto")}
            className="bg-white  w-32 py-4 px-2 cursor-pointer hover:bg-gray-200"
          >
            RTO Location
            <p className="text-gray-500 text-sm">
              {CarDetailsS.rto != "" ? CarDetailsS.rto : "Select"}
            </p>
          </li>
          <li
            onClick={(e) => HandleSetClick(e, 2, "year")}
            className="bg-white  w-32 py-4 px-2 cursor-pointer hover:bg-gray-200"
          >
            Year
            <p className="text-gray-500 text-sm">
              {CarDetailsS.year != "" ? CarDetailsS.year : "Select"}
            </p>
          </li>
          <li
            onClick={(e) => HandleSetClick(e, 3, "model")}
            className="bg-white  w-32 py-4 px-2 cursor-pointer hover:bg-gray-200"
          >
            Model
            <p className="text-gray-500 text-sm">
              {CarDetailsS.model != "" ? CarDetailsS.model : "Select"}
            </p>
          </li>
          <li
            onClick={(e) => HandleSetClick(e, 4, "varient")}
            className="bg-white  w-32 py-4 px-2 cursor-pointer hover:bg-gray-200"
          >
            Varient
            <p className="text-gray-500 text-sm">
              {CarDetailsS.varient != "" ? CarDetailsS.varient : "Select"}
            </p>
          </li>
          <li
            onClick={(e) => HandleSetClick(e, 5, "owner")}
            className="bg-white  w-32 py-4 px-2 cursor-pointer hover:bg-gray-200"
          >
            Owner
            <p className="text-gray-500 text-sm">
              {CarDetailsS.owner != "" ? CarDetailsS.owner : "Select"}
            </p>
          </li>
          <li
            onClick={(e) => HandleSetClick(e, 6, "kmDrive")}
            className="bg-white  w-32 py-4 px-2 cursor-pointer hover:bg-gray-200"
          >
            KM Driven
            <p className="text-gray-500 text-sm">
              {CarDetailsS.kmDrive != "" ? CarDetailsS.kmDrive : "Select"}
            </p>
          </li>
          <li
            onClick={(e) => HandleSetClick(e, 7, "when")}
            className="bg-white  w-32 py-4 px-2 cursor-pointer hover:bg-gray-200"
          >
            When to Sell
            <p className="text-gray-500 text-sm">
              {CarDetailsS.when != "" ? CarDetailsS.when : "Select"}
            </p>
          </li>
          <li
            onClick={HandleNavigate}
            className="hover:bg-red-400 bg-red-500 w-32 py-4 px-2 cursor-pointer text-white rounded-r"
          >
            <h6 className="text-center">Get Price</h6>
          </li>
        </ul>
        </span>
        

      <div
        className="md:absolute m-auto top-1/2 md:top-3/4 md:mt-24 "
        hidden={!(Navigator == 0)}
      >
        <Brand
          CarDetailsS={CarDetailsS}
          setCarDetailsS={setCarDetailsS}
          setNavigator={setNavigator}
        />
      </div>
      <div
        className="md:absolute m-auto top-1/2 md:top-3/4 md:mt-24 left-24"
        hidden={!(Navigator == 1)}
      >
        <Rto
          CarDetailsS={CarDetailsS}
          setCarDetailsS={setCarDetailsS}
          setNavigator={setNavigator}
        />
      </div>
      <div
        className="md:absolute m-auto top-1/2 md:top-3/4 md:mt-24 left-48"
        hidden={!(Navigator == 2)}
      >
        <Year
          CarDetailsS={CarDetailsS}
          setCarDetailsS={setCarDetailsS}
          setNavigator={setNavigator}
        />
      </div>
      <div
        className="md:absolute m-auto top-1/2 md:top-3/4 md:mt-24 left-1/3 ml-4"
        hidden={!(Navigator == 3)}
      >
        <Model
          CarDetailsS={CarDetailsS}
          setCarDetailsS={setCarDetailsS}
          setNavigator={setNavigator}
        />
      </div>
      <div
        className="md:absolute m-auto top-1/2 md:top-3/4 md:mt-24 left-1/2"
        hidden={!(Navigator == 4)}
      >
        <Varient
          CarDetailsS={CarDetailsS}
          setCarDetailsS={setCarDetailsS}
          setNavigator={setNavigator}
        />
      </div>
      <div
        className="md:absolute m-auto top-1/2 md:top-3/4 md:mt-24 right-96 ml-4"
        hidden={!(Navigator == 5)}
      >
        <Owner
          CarDetailsS={CarDetailsS}
          setCarDetailsS={setCarDetailsS}
          setNavigator={setNavigator}
        />
      </div>
      <div
        className="md:absolute m-auto top-1/2 md:top-3/4 md:mt-24 right-64 ml-4"
        hidden={!(Navigator == 6)}
      >
        <KmDrive
          CarDetailsS={CarDetailsS}
          setCarDetailsS={setCarDetailsS}
          setNavigator={setNavigator}
        />
      </div>
      <div
        className="md:absolute m-auto top-1/2 md:top-3/4 md:mt-24 right-36 ml-4"
        hidden={!(Navigator == 7)}
      >
        <When
          CarDetailsS={CarDetailsS}
          setCarDetailsS={setCarDetailsS}
          setNavigator={setNavigator}
        />
      </div>
      </div>
    </div>
  );
};

export default index;
