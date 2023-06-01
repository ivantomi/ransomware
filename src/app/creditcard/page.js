"use client";
import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const PaymentForm = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

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
        <h1 className="text-3xl">100% safe Payment Platform</h1>
        <h6>Confirmed by Goggle.com</h6>
      </div>
      <div className="ml-2 text-pink-500 text-2xl ">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <form className="flex flex-col items-center justify-center gap-4 mt-10 ">
          <input
            type="number"
            name="number"
            placeholder="Card number"
            value={state.number}
            onChange={(evt) => handleInputChange(evt, 16)}
            onFocus={handleInputFocus}
          />
          <input
            type="expiry"
            name="expiry"
            placeholder="Expiretion date"
            value={state.expiry}
            onChange={(evt) => handleInputChange(evt, 4)}
            onFocus={handleInputFocus}
          />

          <input
            type="cvc"
            name="cvc"
            placeholder="CVV"
            value={state.cvc}
            onChange={(evt) => handleInputChange(evt, 3)}
            onFocus={handleInputFocus}
          />
          <input
            type="name"
            name="name"
            placeholder="Name on Card"
            value={state.name}
            onChange={(evt) => handleInputChange(evt, 15)}
            onFocus={handleInputFocus}
          />
          <button className="border-pink-500 border-[2px] px-8 py-3 bg-pink-500 text-white rounded-full mt-4">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentForm;
