import {useState} from 'react';
import './App.css';

function App() {
  // colors array 
  const colors = [
    {
        id: 1,
        name: 'red',
        numero: 1,
    },
    {
        id: 2,
        name: 'blue',
        numero: 2
    },
    {
        id: 3,
        name: 'green',
        numero: 3
    },
    {
        id: 4,
        name: 'yellow',
        numero: 4
    },
    {
        id: 5,
        name: 'orange',
        numero: 5
    },
    {
        id: 6,
        name: 'purple',
        numero: 6
    },
   
]
  // double array 
  const colorsDouble = colors.concat(...colors)

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const BLANK_CARD = "https://progitek.no/privat/bp/wp-content/uploads/2021/09/pexels-pixabay-235985-scaled.jpg"
  //  flip colors 
  function flipColors(colors, id) {
    console.log(colors, id)
  }
  

  
  return (
    <div className="App">
      <section className='griglia'>
        {/* print card colors random  */}
        {colorsDouble.sort(() => Math.random() - 0.5).map((color, id) => (
          <div onClick={() => flipColors (color, id)} key={id} className='card-container'>
            <div style={{backgroundColor: color.name }} className='card'>
            </div>
          </div>
        ))}




        
        {/* print card numbers  */}
        {/* <div className="absoulte">
          {numbers.map((number, index) => (
            <div key={index} className='card-container'>
              <div style={{backgroundColor: 'white'}} className='card numero'>
                {number}
              </div>
            </div>
          ))}
        </div> */}
      </section>
    </div>
  );
}

export default App;
