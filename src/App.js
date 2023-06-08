import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        console.log(quotes);
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
    toast('🦄 Quote Generated', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <>
      <div className='container'>
        <h1 className='text-center quote'> Quote Generator</h1>
        <section>
          <div className='d-flex justify-content-center'>
            <button className=' new' onClick={getNewQuote}>New Quote</button>
          </div>
          <h3 className='text-center para' >
            " {quote?.text}"

          </h3>
          <p className='text-center author'>- {quote?.author}</p>
        </section>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
