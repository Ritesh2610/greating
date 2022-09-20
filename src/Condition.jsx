import React from 'react';
function Condition() {
    

    let currentTime = new Date();
    currentTime = currentTime.getHours();
    var greating = '';


    const cssStyle = {

    }
    if (currentTime >= 1 && currentTime < 12) {
        greating = 'Good Morning';
        cssStyle.color = 'green';
    }
    else if (currentTime >= 12 && currentTime < 17) {
        greating = 'Good Afternoon';
        cssStyle.color = 'orange';
    }
    else if (currentTime >= 17 && currentTime < 19) {
        greating = 'Good Evening';
        cssStyle.color = 'pink';
    }
    else {
        greating = 'Good night'
        cssStyle.color = 'blue';
    }
    return(
    <div className="d">

        <h1>Hello sir <span style={cssStyle}> {greating}</span></h1>
    </div>)
}
export default Condition;