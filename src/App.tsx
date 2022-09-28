import React, { useState } from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

function App() {
  const [firstNumber, setFirstNumber] = useState<any | null>(0);
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondNumber, setSecondNumber] = useState<any | null>(0);
  const [secondCheck, setSecondCheck] = useState(false);
  const [thirdNumber, setThirdNumber] = useState<any | null>(0);
  const [thirdCheck, setThirdCheck] = useState(false);
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");

  const calculateSum = () => {
    setError("");
    if (firstCheck && secondCheck && thirdCheck) {
      setResult(firstNumber + secondNumber + thirdNumber);
    } else if (firstCheck && secondCheck) {
      setResult(firstNumber + secondNumber);
    } else if (secondCheck && thirdCheck) {
      setResult(secondNumber + thirdNumber);
    } else if (firstCheck && thirdCheck) {
      setResult(firstNumber + thirdNumber);
    } else {
      setError("You must chek min. 2 input");
    }
  };
  const calculateSubstract = ()=> {
    setError("");
    if (firstCheck && secondCheck && thirdCheck) {
      setResult(firstNumber - secondNumber - thirdNumber);
    } else if (firstCheck && secondCheck) {
      setResult(firstNumber - secondNumber);
    } else if (secondCheck && thirdCheck) {
      setResult(secondNumber - thirdNumber);
    } else if (firstCheck && thirdCheck) {
      setResult(firstNumber - thirdNumber);
    } else {
      setError("You must chek min. 2 input");
    }
  };
  const calculateTimes = () => {
    setError("");
    if (firstCheck && secondCheck && thirdCheck) {
      setResult(firstNumber * secondNumber * thirdNumber);
    } else if (firstCheck && secondCheck) {
      setResult(firstNumber * secondNumber);
    } else if (secondCheck && thirdCheck) {
      setResult(secondNumber * thirdNumber);
    } else if (firstCheck && thirdCheck) {
      setResult(firstNumber * thirdNumber);
    } else {
      setError("You must chek min. 2 input");
    }
  };
  const calculateDivide = () => {
    setError("");
    if (firstCheck && secondCheck && thirdCheck) {
      setResult(firstNumber / secondNumber / thirdNumber);
    } else if (firstCheck && secondCheck) {
      setResult(firstNumber / secondNumber);
    } else if (secondCheck && thirdCheck) {
      setResult(secondNumber / thirdNumber);
    } else if (firstCheck && thirdCheck) {
      setResult(firstNumber / thirdNumber);
    } else {
      setError("You must chek min. 2 input");
    }
  };

  return (
    <div className='Calc mx-3 mt-24 sm:mx-4 md:mx-5 lg:mx-0 sm:mt-10'>
      <div className='relative'>
        <Navbar></Navbar>

        <div className='max-w-lg mx-auto my-10 bg-gray-200 rounded-lg shadow-lg'>
          <div className='px-4 pt-5 pb-2 bg-transparent sm:p-6'>
            <div className='grid grid-cols-6 gap-4 pt-5'>
              <div className='col-span-5 mb-2 pl-4'>
                <input
                  type='number'
                  name='firstNumber'
                  id='firstNumber'
                  autoComplete='off'
                  autoFocus
                  value={firstNumber}
                  onChange={(e) => setFirstNumber(e.target.value)}
                  placeholder="Input your first number"
                  className='mt-1 font-mono focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-zinc-300 rounded-md disabled:bg-slate-50 drop-shadow-md'
                />
              </div>
              <div className='col-span-1 mb-2'>
                <div className='relative mt-3'>
                  <div className='flex justify-center'>
                    <input
                      id='remember-me'
                      name='remember-me'
                      type='checkbox'
                      defaultChecked={firstCheck}
                      onClick={() => {
                        setFirstCheck(!firstCheck);
                        setError("");
                      }}
                      className='h-6 w-6 rounded text-gray-700 focus:ring-gray-700 my-auto border-zinc-300 drop-shadow-lg'
                    />
                  </div>
                </div>
              </div>
              <div className='col-span-5 mb-2 pl-4'>
                <input
                  type='number'
                  name='secondNumber'
                  id='secondNumber'
                  autoComplete='off'
                  value={secondNumber}
                  onChange={(e) => setSecondNumber(e.target.value)}
                  placeholder="Input your second number"
                  className='mt-1 font-mono focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-zinc-300 rounded-md disabled:bg-slate-50 drop-shadow-md'
                />
              </div>
              <div className='col-span-1 mb-2'>
                <div className='relative mt-3'>
                  <div className='flex justify-center'>
                    <input
                      id='remember-me'
                      name='remember-me'
                      type='checkbox'
                      defaultChecked={secondCheck}
                      onClick={() => {
                        setSecondCheck(!secondCheck);
                        setError("");
                      }}
                      className='h-6 w-6 rounded text-gray-700 focus:ring-gray-700 my-auto border-zinc-300 drop-shadow-lg'
                    />
                  </div>
                </div>
              </div>
              <div className='col-span-5 mb-2 pl-4'>
                <input
                  type='number'
                  name='thirdNumber'
                  id='thirdNumber'
                  autoComplete='off'
                  value={thirdNumber}
                  onChange={(e) => setThirdNumber(e.target.value)}
                  placeholder="Input your third number"
                  className='mt-1 font-mono focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-zinc-300 rounded-md disabled:bg-slate-50 drop-shadow-md'
                />
              </div>
              <div className='col-span-1 mb-2'>
                <div className='relative mt-3'>
                  <div className='flex justify-center'>
                    <input
                      id='remember-me'
                      name='remember-me'
                      type='checkbox'
                      defaultChecked={thirdCheck}
                      onClick={() => {
                        setThirdCheck(!thirdCheck);
                        setError("");
                      }}
                      className='h-6 w-6 rounded text-gray-700 focus:ring-gray-700 my-auto border-zinc-300 drop-shadow-lg'
                    />
                  </div>
                </div>
              </div>
              {error !== "" ? (
                <div className='col-span-5 mt-2 text-center'>
                  <p className='text-red-600'>{error}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className='px-4 pt-5 pb-8 text-center sm:px-6'>
            <button
              type='button'
              className='inline-flex justify-center py-2 px-4 mx-2 border border-transparent shadow-sm text-sm font-bold rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:bg-gray-50'
              onClick={() => calculateSum()}>
              +
            </button>
            <button
              type='button'
              className='inline-flex justify-center py-2 px-4 mx-2 border border-transparent shadow-sm text-sm font-bold rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:bg-gray-50'
              onClick={() => calculateSubstract()}>
              -
            </button>
            <button
              type='button'
              className='inline-flex justify-center py-2 px-4 mx-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:bg-gray-50'
              onClick={() => calculateTimes()}>
              x
            </button>
            <button
              type='button'
              className='inline-flex justify-center py-2 px-4 mx-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:bg-gray-50'
              onClick={() => calculateDivide()}>
              /
            </button>
          </div>
        </div>

        <div className='max-w-lg mx-auto my-10 bg-gray-200 rounded-lg shadow-lg font-mono'>
          <div className='px-4 py-5 sm:px-6 text-right text-gray-600 text-xl font-extrabold'>
            {result}
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
