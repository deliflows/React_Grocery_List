
function Grocerylist({thePropThatHasTheGroceryItems}){
    const theIndividualGroceryItems = thePropThatHasTheGroceryItems.map(function(item, index){
        return(<li key={index}>{item}</li>)
    })
    return(
        <ul>
            {theIndividualGroceryItems}
        </ul>
    )
}

export default Grocerylist;