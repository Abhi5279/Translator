import React, { useState } from 'react'

const Home = () => {

  const [text, Settext] = useState('');

  const [targetLang, Setlang] = useState('');

  const [showop, Setshowop] = useState(false);

  const [loading, Setloading] = useState(false);

  const [translatedText, SettranslatedText] = useState('');


  const url = 'https://translator-xr5w.onrender.com'; 

  const translate = async (e) => {
    e.preventDefault();


    Setloading(true);
    Setshowop(true);

    const data = {
      text,
      targetLang
    }



    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    Setloading(false);
    SettranslatedText(result.translated)
    console.log(result);
  }

  return (

    <div className='w-screen h-screen flex items-center justify-start'>
      <div className=' justify-center h-full w-full flex flex-col items-center bg-gray-200'>
        <div className='w-full flex flex-col items-center justify-center'>
          <input type="text" value={text} placeholder='Enter your text' onChange={(e) => { Settext(e.target.value) }} className='p-3 m-5 border-none outline-none w-[400px] text-center text-gray-800 text-lg' />
          {showop && (<output className='p-3 m-5 border-none outline-none w-[400px] text-center text-lg bg-white text-black'>{
            loading ? 'Please Wait Translating...' : translatedText
          }</output>)}
        </div>
        <div className='w-full flex items-center justify-center '>
          <select className='outline-none border-none  text-center px-4 py-2' onChange={(e) => { Setlang(e.target.value) }}>
            <option value="null" className='border-none outline-none'>Select Language</option>
            <option value="ta" className='border-none outline-none'>Tamil</option>
            <option value="hi" className='border-none outline-none'>Hindi</option>
            <option value="te" className='border-none outline-none'>Telugu</option>
            <option value="be" className='border-none outline-none'>Bengali</option>
            <option value="ka" className='border-none outline-none'>Kannada</option>
          </select>
        </div>
        <div className='w-full flex items-center justify-center'>
          <button onClick={translate} className='text-sm border-none font-semibold  bg-black text-white p-3 m-5 outline-none' >TRANSLATE</button>
        </div>
      </div>

    </div>
  )
}

export default Home

