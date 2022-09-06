import {useEffect, useState} from 'react';

function HomeApp() {
   // colors array 
   const colorsSix = [
    {
        id: 1,
        name: 'red',
    },
    {
        id: 2,
        name: 'blue',
    },
    {
        id: 3,
        name: 'green',
    },
    {
        id: 4,
        name: 'yellow',
    },
    {
        id: 5,
        name: 'orange',
    },
    {
        id: 6,
        name: 'purple',
    }];
    // double array 
    const [colors, setColors] = useState([]);
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    // array chose cards id 
    const [cardsChosenIds, setCardsChosenIds] = useState([])
    // array chose cards 
    const [cardsChosen, setCardsChosen] = useState([])
    //   card selected 
    const [openCards, setOpenCards] = useState([])
    //   color cards 
    const BLANK_CARD = "white"
     // timer 
     const [seconds, setSeconds] = useState(15);
     const [showElement,setShowElement] = useState(false)
    // win 
    const [showWin,setShowWin] = useState(false)
    //   create double array and shuffle 
    function createCardBoard() {
    const cardsGenerated = colorsSix.concat(...colorsSix)
    const shuffledArray = shuffleArray(cardsGenerated)
    setColors(shuffledArray)
    }
    //  flip colors 
    function flipColors(colors, id) {
        
        if (cardsChosenIds.length === 1 && cardsChosenIds[0] === id) {
            return
        }
        if(cardsChosen.length < 2){
            setCardsChosen(cardsChosen => cardsChosen.concat(colors))
            setCardsChosenIds(cardsChosenIds => cardsChosenIds.concat(id))
            if(cardsChosen.length === 1){
            if(cardsChosen[0].name === colors.name){
                setOpenCards(openCards => openCards.concat(cardsChosen[0].name))
                console.log(openCards)
            }
            // win 
            if(openCards.length === 5){
                
                setTimeout(() => {
                    setColors([])
                    setShowWin(true)
                    stopCoundown()
                },500)
            }
            setTimeout(()=>{
                setCardsChosenIds([])
                setCardsChosen([])
            }, 700)
            } 
        }
        if(seconds === 0){
            setShowElement(true);
        }
    }
    function isCardChosen(colors, id) {
    return cardsChosenIds.includes(id) || openCards.includes(colors)
    }
    // shuffle colors function 
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        console.log(array)
        return array
    }
    
    // timer 
    const coundown = () => {
        if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
        }
    };
    
    function stopCoundown() {
        clearTimeout(coundown);
    }
    coundown();

    // start again 
    function startAgain() {
        setCardsChosenIds([])
        setCardsChosen([])
        setOpenCards([])
        createCardBoard()
        setShowElement(false);
        setSeconds(60)
        setTimeout(()=>{
            setColors([])
            setShowElement(true);
        }, 60000)
    }
    useEffect(() => {
        createCardBoard()
        
        setTimeout(()=>{
            setColors([])
        }, 15000)
    },[])
  
    return (
        <div className="cards-container">
            <section className='griglia'>
                {/* print card colors random  */}
                {colors.map((color, id) => (
                <div  key={id} className='card-container'>
                    <div onClick={() => flipColors (color, id)} style={{backgroundColor: isCardChosen(color.name, id) ? color.name : color.name, cursor: isCardChosen(color.name, id) ? 'default' : 'pointer'}} className='card numero'>
                        {/* print numbers  */}
                        <h2 style={{color: isCardChosen(color.name, id) ? color.name : '#66C1EE' }}>{numbers[id]}
                        </h2>
                    </div>
                </div>
                ))}
                {/* coundown  */}
                <div className="coundown">
                    <h1>{seconds}</h1>
                </div>
                <div className='containerElementTimer'>
                    {/* game over  */}
                    {showElement ? (
                    <div className='elementTimer'>
                        <h1>Tempo scaduto!</h1>
                        <h2 onClick={startAgain} >Riprova</h2>
                    </div>)
                    :(<></>)
                    } 
                    {showWin ? (
                    <div className='elementTimer'>
                        <h1>Grazie per aver giocato!</h1>
                    </div>)
                    :(<></>)
                    } 
                </div>
                
            </section>
        </div>
    );
}

export default HomeApp