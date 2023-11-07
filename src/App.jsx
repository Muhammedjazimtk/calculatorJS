import { useState } from "react";
import "./App.css";

function App() {
  const [s, setS] = useState("");
  const [ans, setAns] = useState(0);

  function handleans(e) {
    let key = e.target.innerHTML;
    setS(s + e.target.innerHTML);

    if (
      key == "1" ||
      key == "2" ||
      key == "3" ||
      key == "4" ||
      key == "5" ||
      key == "6" ||
      key == "7" ||
      key == "8" ||
      key == "9"
    ) {
      setAns(ans != 0 ? ans + key : key);
    }
  }

  function handleClear(e) {
    if (e.target.id == "C") {
      setAns(0);
      setS("");
    } else {
      setS(s.slice(0, s.length - 1));
    }
  }
  return (
    <div className="w-[100%] h-[100vh] bg-black flex justify-center items-center">
      <div className=" w-[250px] h-[390px] rounded-md flex flex-col gap-3">
        <div className="w-full h-[80px] pr-2 ">
          <p className="w-full  h-1/2 text-white text-lg mb-[1px] flex justify-end items-end truncate ">
            {s}
          </p>
          <p className="w-full  truncate h-1/2 text-white text-4xl flex justify-end items-end">
            {ans == 0 ? 0 : ans}
          </p>
        </div>
        <div className="grid  grid-cols-4 grid-rows-5 h-full w-full">
          <div
            onClick={handleClear}
            id="C"
            className="col-auto row-auto bg-[#a5a5a5] m-[2px] rounded-full font-semibold text-black text-2xl  flex items-center justify-center"
          >
            C
          </div>
          <div
            onClick={handleClear}
            id="clear"
            className="col-auto row-auto bg-[#a5a5a5] m-[2px] rounded-full text-black text-2xl font-bold flex items-center justify-center"
          >
            ←
          </div>
          <div
            onClick={handleans}
            id="prec"
            className="col-auto row-auto bg-[#a5a5a5] m-[2px] rounded-full text-black text-2xl font-semibold flex items-center justify-center"
          >
            %
          </div>
          <div
            onClick={handleans}
            id="div"
            className="col-auto row-auto bg-[#ffa214] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center"
          >
            /
          </div>
          <div
            onClick={handleans}
            id="7"
            className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center"
          >
            7
          </div>
          <div
            onClick={handleans}
            id="8"
            className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center "
          >
            8
          </div>
          <div
            onClick={handleans}
            id="9"
            className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center"
          >
            9
          </div>
          <div
            onClick={handleans}
            id="mul"
            className="col-auto row-auto bg-[#ffa214] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center"
          >
            x
          </div>
          <div
            onClick={handleans}
            id="4"
            className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center"
          >
            4
          </div>
          <div
            onClick={handleans}
            id="5"
            className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center"
          >
            5
          </div>
          <div
            onClick={handleans}
            id="6"
            className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center"
          >
            6
          </div>
          <div
            onClick={handleans}
            id="plus"
            className="col-auto row-auto bg-[#ffa214] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center"
          >
            +
          </div>
          <div
            onClick={handleans}
            id="1"
            className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center"
          >
            1
          </div>
          <div
            onClick={handleans}
            id="2"
            className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center"
          >
            2
          </div>
          <div
            onClick={handleans}
            id="3"
            className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center"
          >
            3
          </div>
          <div
            onClick={handleans}
            id="minus"
            className="col-auto row-auto bg-[#ffa214] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center"
          >
            -
          </div>
          <div
            onClick={handleans}
            id="0"
            className="col-auto col-start-1 col-end-3 row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-start pl-4"
          >
            0
          </div>

          <div
            onClick={handleans}
            id="dot"
            className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center"
          >
            .
          </div>
          <div
            id="equal"
            onClick={handleans}
            className="col-auto row-auto bg-[#ffa214] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center"
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
