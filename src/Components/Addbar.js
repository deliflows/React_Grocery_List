import {useState} from 'react';

function Addbar({thePropNameThatPassesTheFunction}){

    const [whatWeTyped, setWhatWeTyped] = useState('');

    function onInputChange(event){
        setWhatWeTyped(event.target.value);
    }

    function onFormSubmit(event){
        event.preventDefault();
        console.log(`I would like to add ${whatWeTyped} to the grocerylist`);
        thePropNameThatPassesTheFunction(whatWeTyped);
        setWhatWeTyped('');
    }

    return(
        <form onSubmit={onFormSubmit}>
            <input onChange={onInputChange} value={whatWeTyped} />
            <button>Click Me</button>
        </form>
    )
}

export default Addbar;