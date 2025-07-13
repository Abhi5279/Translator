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

    <div className="w-screen min-h-screen flex items-center justify-start h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full bg-gray-200 p-4">

        {/* Input and Output Section */}
        <div className="w-full max-w-md flex flex-col items-center justify-center">
          <input
            type="text"
            value={text}
            placeholder="Enter your text"
            onChange={(e) => Settext(e.target.value)}
            className="p-3 m-3 w-full text-center text-gray-800 text-base sm:text-lg rounded-md shadow-sm"
          />
          {showop && (
            <output className="p-3 m-3 w-full text-center text-base sm:text-lg bg-white text-black rounded-md shadow">
              {loading ? 'Please Wait Translating...' : translatedText}
            </output>
          )}
        </div>

        {/* Language Dropdown */}
        <div className="w-full max-w-md flex items-center justify-center">
          <select
            className="w-full px-4 py-2 text-center text-gray-700 rounded-md shadow-sm outline-none"
            onChange={(e) => Setlang(e.target.value)}
          >
            <option value="null">Select Language</option>
            <option value="ta">Tamil</option>
            <option value="hi">Hindi</option>
            <option value="te">Telugu</option>
            <option value="be">Bengali</option>
            <option value="ka">Kannada</option>
          </select>
        </div>

        {/* Translate Button */}
        <div className="w-full max-w-md flex items-center justify-center">
          <button
            onClick={translate}
            className="w-full bg-black text-white font-semibold py-3 px-6 m-3 text-sm rounded-md hover:bg-gray-800 transition duration-200"
          >
            TRANSLATE
          </button>
        </div>

      </div>
    </div>

  )
}

export default Home

