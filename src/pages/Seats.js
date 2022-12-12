import React, { useState } from "react"
import styled from "styled-components";


function Seats(e) {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [btnActive, setBtnActive] = useState("");
    const [btnStyle, setBtnStyle] = useState(0);
    const handleBtnStyle = (e) => {
      setBtnStyle(e)
      }


    const toggleActive = (e) => {
      setBtnActive((prev) => {
        return e.target.value;
      });
    };
    
    return (
      <div className="container">
        {data.map((item, num) => {
          return (
            <>
              <button
                value={num}
                className={"btn" + (num == btnActive ? " active" : "")}
                onClick={toggleActive}
              >
                {item}
              </button>
              <button valude ={num} 
              onClick={() => handleBtnStyle(e)} changeNavStyle={btnStyle === e}
              > {item}</button>

            </>
          );
        })}
      </div>
    

    );

}
export default Seats;

const ButtonContainer = styled.div'
   display: grid;
   color : green;
   grid-template-columns: 1fr 1fr 1fr 1fr;
 `;


 