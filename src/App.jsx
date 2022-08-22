import React from "react";


function App () {
    let curDate = new Date (2022, 8, 23, 2);
    curDate = curDate.getHours();
    let Greeting = "";
    const cssStyle = { };
    if (curDate >= 1 && curDate < 12) {
        Greeting = 'Good Morning';
        cssStyle.color = 'green';
    } else if (curDate >= 12 && curDate< 20){
        Greeting = 'Good Afternoon';
        cssStyle.color = 'Orange';
    } else{
        Greeting ='Good Night';
        cssStyle.color = 'Black';
    }
    return(
        <>
        <div>
            <h1> Hello Sir, <span style={cssStyle}> {Greeting} </span> </h1>,
        </div>
        </>
    )

}

export default App;
