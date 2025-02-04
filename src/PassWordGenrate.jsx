import React, { useCallback, useEffect, useState } from "react";
import { useRef } from "react";

function PassWordGenrate() {

    const [length,setlength] = useState(8);
    const [numberAllowed,setnumberAllowed] = useState(false)
    const [CharAllowed,setCharAllowed] = useState(false)
    const [password,setpassword] = useState('')

    const createpassword = useCallback(()=>{
        let pass =''
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        if(numberAllowed){
            str +='123456789'
        }

        if(CharAllowed){
            str +='!@#$%^&*()_-{}' 
        }


        for(let i=1;i<length;i++){
            let char = Math.floor(Math.random() * str.length + 1) 

            pass += str.charAt(char)
        }


        setpassword(pass)

    },
    [length,numberAllowed,CharAllowed,setpassword])

    const copypasswordtoclipboard = useCallback(()=>{
        passwordref.current?.select()
        // passwordref.current?.setSelectionRange(0,7).select()
        window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(()=>{
        createpassword()
    },[length,CharAllowed,numberAllowed,createpassword])


   const passwordref = useRef(null)
    // createpassword()
  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md
         rounded-lg px-4 py-8 text-orange-500 bg-gray-700 mt-3"
      >
        <h1 className=" text-white text-center my-3 "> PASSWORD GENRATER </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">

                <input type="text"
                value={password}
                className="outline-none w-full py-1 px-3"
                placeholder="password"
                readOnly
                ref={passwordref}
                />
                <button onClick={copypasswordtoclipboard} className="outline-none bg-blue-700 text-white px-3 shrink-0">
                    copy</button>


        </div>
        <div className="flex text-sm gap-x-2">
            <div className="flex item-center gap-x-1 ">
                <input type="range"
                    min={6}
                    max={100}
                    value={length}
                    className="curser-pointer"
                    onChange={(e)=>{setlength(e.target.value)}}
                />
                <label> length:{length}</label>

            </div>
            <div className="flex item-center gap-x-1 ">
                <input type="checkbox"
                    defaultChecked={numberAllowed}
                    id='numberInput'
                    // value={length}
                    className="curser-pointer"
                    onChange={()=>{setnumberAllowed((prev)=> !prev)}}
                />
                <label> Numbers:</label>

            </div>

            <div className="flex item-center gap-x-1 ">
                <input type="checkbox"
                    defaultChecked={CharAllowed}
                    id='characterInput'
                    // value={length}
                    className="curser-pointer"
                    onChange={()=>{setCharAllowed((prev)=> !prev)}}

                />
                <label> Character:</label>

            </div>
        </div>
      </div>
    </>
  );
}

export default PassWordGenrate;
