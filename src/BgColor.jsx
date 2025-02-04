import React,{useState} from "react"

function BgColor(){
    const [color, setColor] = useState("red");

    return(
        <>
         <div
        className="w-full h-screen duration-700"
        style={{ backgroundColor: color }}
      >

        <div className="fixed flex flex-wrap justify-center inset-x-0 px-2">
          <div className="flex flex-warp justify-center gap-3  px-3 shadow-lg bg-white  py-2 rounded-3xl">
            <button
              onClick={() => {
                setColor("red");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button
              onClick={() => {
                setColor("yellow");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>
            <button
              onClick={() => {
                setColor("pink");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              pink
            </button>
            <button
              onClick={() => {
                setColor("black");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              black
            </button>
            <button
              onClick={() => {
                setColor("grey");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "grey" }}
            >
              grey
            </button>
            <button
              onClick={() => {
                setColor("lime");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "lime" }}
            >
              lime
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
              onClick={() => {
                setColor("indigo");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "indigo" }}
            >
              indigo
            </button>
            <button
              onClick={() => {
                setColor("purple");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              purple
            </button>
            <button
              onClick={() => {
                setColor("violet");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "violet" }}
            >
              violet
            </button>
            <button
              onClick={() => {
                setColor("cyan");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "cyan" }}
            >
              cyan
            </button>
          </div>
        
        </div>
      </div>

        </>
    )
}

export default BgColor