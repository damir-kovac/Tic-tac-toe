import React from 'react'

const Board = () => {
    return (
        <div id="container">
            <div className='row'>
                <div id='11'>X</div>
                <div id='12'>X</div>
                <div id='13'>X</div>
            </div>
            <div className='row'>
                <div id='21'>X</div>
                <div id='22'>X</div>
                <div id='23'>O</div>
            </div>
            <div className='row'>
                <div id='31'>X</div>
                <div id='32'>X</div>
                <div id='33'>X</div>
            </div>
        </div>
    )
}

export default Board;