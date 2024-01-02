import { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");

  const appendValue = (newValue) => {
    setValue(value + newValue.target.innerHTML);
  };

  const equal = () => {
    setValue(eval(value));
  };

  const deleteLastNum = () => {
    setValue(value.toString().slice(0, -1));
  };

  const allClear = () => {
    setValue("");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-t from-purple-700 to-orange-600 ">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-8 shadow-md w-96">
        <div className="mb-4">
          <input
            type="text"
            className="w-full border-0 focus:outline-none focus:ring-0 bg-transparent text-3xl text-right text-white p-2 rounded"
            value={value}
            readOnly
          />
        </div>

        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={allClear}
            className="col-span-2 bg-red-500 hover:bg-red-600 text-white p-4 rounded-full"
          >
            AC
          </button>
          <button
            onClick={deleteLastNum}
            className=" bg-red-500 hover:bg-red-600 text-white p-4 rounded-full"
          >
            DEL
          </button>
          <button
            onClick={appendValue}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-4 rounded-full"
          >
            *
          </button>
          <button
            onClick={appendValue}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-4 rounded-full"
          >
            7
          </button>

          <button
            onClick={appendValue}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-4 rounded-full"
          >
            8
          </button>

          <button
            onClick={appendValue}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-4 rounded-full"
          >
            9
          </button>
          <button
            onClick={appendValue}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-4 rounded-full"
          >
            ÷
          </button>

          <button
            onClick={appendValue}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-4 rounded-full"
          >
            4
          </button>

          <button
            onClick={appendValue}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-4 rounded-full"
          >
            5
          </button>
          <button
            onClick={appendValue}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-4 rounded-full"
          >
            6
          </button>

          <button
            onClick={appendValue}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-4 rounded-full"
          >
            +
          </button>
          <button
            onClick={appendValue}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-4 rounded-full"
          >
            1
          </button>

          <button
            onClick={appendValue}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-4 rounded-full"
          >
            2
          </button>
          <button
            onClick={appendValue}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-4 rounded-full"
          >
            3
          </button>

          <button
            onClick={appendValue}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-4 rounded-full"
          >
            -
          </button>
          <button
            onClick={appendValue}
            className=" bg-gray-300 hover:bg-gray-400 text-gray-800 p-4 rounded-full"
          >
            0
          </button>
          <button
            onClick={appendValue}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-4 rounded-full"
          >
            .
          </button>
          <button
            onClick={equal}
            className="col-span-2 bg-gray-300 hover:bg-gray-400 text-gray-800 p-4 rounded-full"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
