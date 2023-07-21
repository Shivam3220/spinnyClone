import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const details = () => {
  const carDetail = useSelector((state) => state.car);
  const { brand, rto, year, model, varient, owner, kmDrive, when } = carDetail.car;
  const router = useRouter();
  useEffect(() => {
    console.log(carDetail)
    if (
      brand != "" &&
      rto != "" &&
      year != "" &&
      model != "" &&
      varient != "" &&
      owner != "" &&
      kmDrive != "" &&
      when != ""
    ) {
    } else {
      router.push("/");
    }
  }, []);

  return (
    <div className="absolute top-40 right-1/3 z-10">
      <div className="text-xl text-white font-bold" >
        <h4>Brand : {brand}</h4>
        <h4>Rto Location : {rto}</h4>
        <h4>Year : {year}</h4>
        <h4>Model : {model}</h4>
        <h4>Varient : {varient}</h4>
        <h4>KM Driven : {kmDrive}</h4>
        <h4>Owner : {owner}</h4>
        <h4>When to Sell : {when}</h4>
      </div>
      <Link href={"/"} className="text-blue-500 text-lg my-2"> Go Back</Link>
    </div>
  );
};

export default details;
