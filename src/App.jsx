import "./App.css";

function App() {
  return (
    <div className="w-[100%] h-[100vh] bg-black flex justify-center items-center">
      <div className=" w-[300px] h-[380px]  rounded-md flex flex-col gap-1">
        <div className="w-full h-[80px] ans">
          <p className="w-full h-1/2  mb-[1px] flex justify-end items-end ">
            120
          </p>
          <p className="w-full h-1/2  flex justify-end items-end">30</p>
        </div>
        <div className="grid grid-cols-4 grid-rows-4 h-full w-full">
          <div className="col-auto row-auto bg-yellow-200 m-[2px] rounded-full"></div>
          <div className="col-auto row-auto bg-yellow-200 m-[2px] rounded-full"></div>
          <div className="col-auto row-auto bg-yellow-200 m-[2px] rounded-full"></div>
          <div className="col-auto row-auto bg-[#ffa214] m-[2px] rounded-full"></div>
          <div className="col-auto row-auto bg-yellow-200 m-[2px] rounded-full"></div>
          <div className="col-auto row-auto bg-yellow-200 m-[2px] rounded-full"></div>
          <div className="col-auto row-auto bg-yellow-200 m-[2px] rounded-full"></div>
          <div className="col-auto row-auto bg-[#ffa214] m-[2px] rounded-full"></div>
          <div className="col-auto row-auto bg-yellow-200 m-[2px] rounded-full"></div>
          <div className="col-auto row-auto bg-yellow-200 m-[2px] rounded-full"></div>
          <div className="col-auto row-auto bg-yellow-200 m-[2px] rounded-full"></div>
          <div className="col-auto row-auto bg-[#ffa214] m-[2px] rounded-full"></div>
          <div className="col-auto row-auto bg-yellow-200 m-[2px] rounded-full"></div>
          <div className="col-auto row-auto bg-yellow-200 m-[2px] rounded-full"></div>
          <div className="col-auto row-auto bg-yellow-200 m-[2px] rounded-full"></div>
          <div className="col-auto row-auto bg-[#ffa214] m-[2px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
