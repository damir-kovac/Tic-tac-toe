import React, { useState } from 'react'

const Board = () => {
    
    const [currentMark, setCurrentMark] = useState("X");
    const [isDone, setIsDone] = useState(false);

    const handleEndGame = (mark) =>{
        setIsDone(true);
    }
    
    const reload = () =>{
        const board = document.getElementsByClassName("field")
        for (const field of board) {
            field.innerText = "";
            field.classList.remove("win");
        }
        setIsDone(false);
    }

    const checkBoard = () =>{

        const f1 = document.getElementById("11");
        const f2 = document.getElementById("12");
        const f3 = document.getElementById("13");
        const f4 = document.getElementById("21");
        const f5 = document.getElementById("22");
        const f6 = document.getElementById("23");
        const f7 = document.getElementById("31");
        const f8 = document.getElementById("32");
        const f9 = document.getElementById("33");

        if(f1.innerText || f2.innerText || f3.innerText){
            if(f1.innerText===f2.innerText && f2.innerText===f3.innerText){
                f1.classList.add("win");
                f2.classList.add("win");
                f3.classList.add("win");
                handleEndGame(f1.innerText);
            }
        }
        if(f4.innerText || f5.innerText || f6.innerText){
            if(f4.innerText===f5.innerText && f5.innerText===f6.innerText){
                f4.classList.add("win");
                f5.classList.add("win");
                f6.classList.add("win");
                handleEndGame(f4.innerText);
            }
        }
        if(f7.innerText || f8.innerText || f9.innerText){
            if(f7.innerText===f8.innerText && f8.innerText===f9.innerText){
                f7.classList.add("win");
                f8.classList.add("win");
                f9.classList.add("win");
                handleEndGame(f7.innerText);
            }
        }
        if(f1.innerText || f4.innerText || f7.innerText){
            if(f1.innerText===f4.innerText && f4.innerText===f7.innerText){
                f1.classList.add("win");
                f4.classList.add("win");
                f7.classList.add("win");
                handleEndGame(f1.innerText);
            }
        }
        if(f2.innerText || f5.innerText || f8.innerText){
            if(f2.innerText===f5.innerText && f5.innerText===f8.innerText){
                f2.classList.add("win");
                f5.classList.add("win");
                f8.classList.add("win");
                handleEndGame(f2.innerText);
            }
        }
        if(f3.innerText || f6.innerText || f9.innerText){
            if(f3.innerText===f6.innerText && f6.innerText===f9.innerText){
                f3.classList.add("win");
                f6.classList.add("win");
                f9.classList.add("win");
                handleEndGame(f3.innerText);
            }
        }
        if(f1.innerText || f5.innerText || f9.innerText){
            if(f1.innerText===f5.innerText && f5.innerText===f9.innerText){
                f1.classList.add("win");
                f5.classList.add("win");
                f9.classList.add("win");
                handleEndGame(f1.innerText);
            }
        }
        if(f3.innerText || f5.innerText || f7.innerText){
            if(f3.innerText===f5.innerText && f5.innerText===f7.innerText){
                f3.classList.add("win");
                f5.classList.add("win");
                f7.classList.add("win");
                handleEndGame(f3.innerText);
            }
        }
    }

    const markField = (e) =>{
        if(!isDone){
            if(e.target.innerText){
                return ;
            } else {
                e.target.innerText = currentMark;
                if(currentMark === "X"){
                    setCurrentMark("O");
                } else{
                    setCurrentMark("X");
                }
                checkBoard();
            }
        }
    }

    return (
        <div>
            <div id="container">
                <div className='row'>
                    <div id='11' className='field' onClick={markField}></div>
                    <div id='12' className='field' onClick={markField}></div>
                    <div id='13' className='field' onClick={markField}></div>
                </div>
                <div className='row'>
                    <div id='21' className='field' onClick={markField}></div>
                    <div id='22' className='field' onClick={markField}></div>
                    <div id='23' className='field' onClick={markField}></div>
                </div>
                <div className='row'>
                    <div id='31' className='field'  onClick={markField}></div>
                    <div id='32' className='field' onClick={markField}></div>
                    <div id='33' className='field' onClick={markField}></div>
                </div>
            </div>
            {isDone && <div><button type='button' onClick={reload}>Play Again</button></div>}
        </div>
    )
}

export default Board;