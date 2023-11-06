import "./App.css";

function App() {
  return (
    <div className="w-[100%] h-[100vh] bg-black flex justify-center items-center">
      <div className=" w-[250px] h-[380px]  rounded-md flex flex-col gap-1">
        <div className="w-full h-[80px] ans">
          <p className="w-full h-1/2  mb-[1px] flex justify-end items-end ">
            120
          </p>
          <p className="w-full h-1/2  flex justify-end items-end">30</p>
        </div>
        <div className="grid  grid-cols-4 grid-rows-5 h-full w-full">
          <div className="col-auto row-auto bg-[#a5a5a5] m-[2px] rounded-full font-semibold text-black text-2xl  flex items-center justify-center">
            C
          </div>
          <div className="col-auto row-auto bg-[#a5a5a5] m-[2px] rounded-full text-black text-2xl font-semibold flex items-center justify-center">
            √
          </div>
          <div className="col-auto row-auto bg-[#a5a5a5] m-[2px] rounded-full text-black text-2xl font-semibold flex items-center justify-center">
            %
          </div>
          <div className="col-auto row-auto bg-[#ffa214] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center">
            /
          </div>
          <div className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center">
            7
          </div>
          <div className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center ">
            8
          </div>
          <div className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center">
            9
          </div>
          <div className="col-auto row-auto bg-[#ffa214] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center">
            x
          </div>
          <div className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center">
            4
          </div>
          <div className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center">
            5
          </div>
          <div className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center">
            6
          </div>
          <div className="col-auto row-auto bg-[#ffa214] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center">
            +
          </div>
          <div className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center">
            1
          </div>
          <div className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center">
            2
          </div>
          <div className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center">
            3
          </div>
          <div className="col-auto row-auto bg-[#ffa214] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center">
            -
          </div>
          <div className="col-auto col-start-1 col-end-3 row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-start pl-4">
            0
          </div>

          <div className="col-auto row-auto bg-[#333333] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center">
            .
          </div>
          <div className="col-auto row-auto bg-[#ffa214] m-[2px] rounded-full text-white text-2xl font-semibold flex items-center justify-center">
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
