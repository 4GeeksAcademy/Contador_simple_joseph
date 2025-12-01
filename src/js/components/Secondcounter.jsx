import React from "react";

const Digit = ({number}) => {
    return (
        <div className="card bg-dark text-white d-flex align-items-center justify-content-center shadow "
        style ={{width: "120px", height:"150px", borderRadius:"20px", fontSize:"5rem"}}>
            {number}
            </div>
    );
};

const SecondCounter=({seconds = 0 }) => {
    const s = Math.floor(seconds);
    
    const d6 = Math.floor(s /100000) %10;
    const d5 = Math.floor(s /10000) %10;
    const d4 = Math.floor(s /1000) %10;
    const d3 = Math.floor(s /100) %10;
    const d2 = Math.floor(s /10) %10;
    const d1 = Math.floor(s) %10;

    return(
    <div className="d-flex flex-wrap gap-3 justify-content-center bg-black p-4"
        style={{widht:"100%"}}>
        <div className="bg-dark text-white d-flex align-items-center justify-content-center shadow"
        style={{
            width:"120px",
            height: "150px",
            fontSize: "5rem",
            borderRadius:"20px"
        }}
        >
        <i className="fa-regular fa-clock" style={{transform: "scaleX(-1)"}}></i>
        </div>
        <Digit number={d6} />
        <Digit number={d5} />
        <Digit number={d4} />
        <Digit number={d3} />
        <Digit number={d2} />
        <Digit number={d1} />
        </div>
        
    );
};

export default SecondCounter;