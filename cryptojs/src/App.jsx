import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import CryptoJS from 'crypto-js'
import './App.css'
import cryptoJs from 'crypto-js';

function App() {
  const [msg, setMsg] = useState('');
  const [encryptText, setEncryptedText] = useState();
  const [dencryptText, setDencryptedText] = useState();



  const handleclick = (e) => {
    e.preventDefault();
    let encrptedText = cryptoJs.AES.encrypt(msg, 'Swarnkar@123').toString();
    setEncryptedText(encrptedText);
    let bytecode = cryptoJs.AES.decrypt(encrptedText, 'Swarnkar@123');
    let decreptedText = bytecode.toString(cryptoJs.enc.Utf8);
    setDencryptedText(decreptedText);
  }


  return (
    <>
      <div className='bg-slate-50 h-screen w-full md:flex md:flex-col'>
        <h1 className='text-3xl font-extrabold text-center md:w-1/2'>Encrption using CryptoJs</h1>
        <div>
          <input type="text" placeholder='Enter Your message' className='p-2 m-4 shadow-sm md:w-2/5' onChange={(e) => setMsg(e.target.value)} />
          <button onClick={handleclick} className='bg-gray-700 hover:bg-gray-900 text-white p-1 font-bold shadow-md rounded-'>{'encrypt'.toUpperCase()}</button>
          <div className='md:w-1/2'>
            <div className='shadow-sm p-2 m-2'>
              <h2 className='font-bold text-gray-900 break-before-auto'>Encrypted Text </h2>
              <div className='p-2 shadow-md overflow-auto scrl'>{encryptText}</div>
            </div>
            <div className='shadow-sm p-2 m-2'>
              <h2 className='font-bold text-gray-900'>Decrypted Text </h2>
              <div className='p-2 shadow-md'>{dencryptText}</div>
            </div>        
          </div>
        </div>
      </div>
    </>
  )
}

export default App
