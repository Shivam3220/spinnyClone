import { useRouter } from "next/router";
import React from "react";

const When = (props) => {
  const { CarDetailsS, setCarDetailsS, setNavigator } = props;

  const router = useRouter();
  const HandleClick = (e, value) => {
    e.preventDefault();
    setCarDetailsS({ ...CarDetailsS, when: value });
    setNavigator(8);
    router.push("/details")
  };

  return (
    <>
      <div className="w-96 bg-white p-2 shadow rounded">
        <h4 className="p-2">km Driven</h4>
        <form className="grid grid-cols-1 gap-2">
          <button
            onClick={(e) => HandleClick(e, "Immediately")}
            className="bg-gray-200 rounded p-2 shadow border-2 hover:border-black"
          >
            <span></span>Immediately
          </button>

          <button
            onClick={(e) => HandleClick(e, "With in a Month")}
            className="bg-gray-200 rounded p-2 shadow border-2 hover:border-black"
          >
            <span> </span>With in a Month
          </button>

          <button
            onClick={(e) => HandleClick(e, "After a Month")}
            className="bg-gray-200 rounded p-2 shadow border-2 hover:border-black"
          >
            <span></span>After a Month
          </button>
        </form>
      </div>
    </>
  );
};
export default When;
