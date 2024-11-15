import { useCallback, useEffect, useRef, useState } from "react"

export default function Generator() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!#$%&'()*+,-./"

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  function handleLength(length) {
    return length < 10 ? `0${length}` : length
  }
  return (
    <div className=" w-[400px] mx-auto border-2 border-zinc-500 py-2 bg-black rounded-lg m-5 ">
      <div className=" text-center text-xl font-semibold font-sans">
        Generate Password
      </div>
      <div className=" text-black px-4  mt-3 flex justify-center gap-2 overflow-hidden">
        <input
          type="text"
          value={password}
          className="outline-none w-full rounded-md py-1 px-3 "
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className=" bg-white hover:bg-gray-300 transition-colors delay-75 px-2 font-semibold rounded-md"
        >
          Copy
        </button>
      </div>
      <div className=" my-3 flex flex-row justify-center gap-3">
        <div className=" flex gap-1 ">
          <label className=" text-sm border-2 px-1  rounded-md">
            {handleLength(length)}
          </label>
          <input
            type="range"
            min={6}
            max={99}
            value={length}
            className=" cursor-pointer accent-white"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className=" flex  items-center ">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            className=" size-4 cursor-pointer accent-white"
          />
          <label className=" px-1 ">Numbers</label>
        </div>
        <div className=" flex  items-center ">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            className=" size-4 cursor-pointer accent-white"
          />
          <label className=" px-1 ">Characters</label>
        </div>
      </div>
    </div>
  )
}
