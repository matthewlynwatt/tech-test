import { useState, useEffect } from 'react'

import './style.scss';
import Header from './Components/Header'
import Main from './Components/Main'


function App() {

  const [getHouse, setGetHouse] = useState([])

    async function fetchData() {
    const resp = await fetch(`https://estate-comparison.codeboot.cz/list.php`);
    const data = await resp.json();
    setGetHouse(data)

  }

  useEffect(() => {
    fetchData()
  }, [])



  return (
    <>
    <Header />
    <Main result={getHouse}/>
    </>
  );
}

export default App;
