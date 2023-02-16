import Grocerylist from "./Components/Grocerylist";
import Addbar from "./Components/Addbar";
import {useState} from 'react';

function App(){
    const [groceryItems, setGroceryItems] = useState([]);
    function GetThatWord(theWord){
        // console.log(`Whoa! We did it! The word${theWord} is back from my child element!`)
        setGroceryItems([...groceryItems, theWord]);
    }

    return(
        <div>
            <Addbar thePropNameThatPassesTheFunction={GetThatWord}/>
            <Grocerylist thePropThatHasTheGroceryItems={groceryItems}/>
        </div>
    )
}

export default App