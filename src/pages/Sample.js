import React, { useState} from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";
import Hour from "./Hour";
import Locker from "./Locker";

function Sample(props) {
    //좌석 선점 여부
    const [selected, setSelected] = useState(True);

    //좌석 상태값 변경
    const handleSelect = () => {
        setSelected((prevselected) => !prevselected);
    };
    
    //좌석 색깔을 변환하기 위한
    const [seatStyle, setseatStyle] = useState(0)
    const handleSeatStyle = (id) => {
        setseatStyle(id)
    }



//<button onClick={() => setSelected((selected) => !selected)}>
 
  
    return (
        <div className="container">
          {SeatData.map((item, num) => {
            return (
              <>
                <p> 좌석 선택 </p>
            <Button key = {id} onClick={ () => handleSelect, handleSeatStyle(id)} 
             changeSeatStyle={seatStyle === id}>
                {selected ? num : "selected"}
            </Button>
            <div>
                {selected ? <Hour /> : null}
            </div>;
              </>
            );
          })}
        </div>
      
  
      );
}

export default Sample;

const SeatData = [
    {
        id : 1,
        num: num
    },
    {
        id : 2,
        num : num
    }
]

const Button = styled.div '
    color :grey;
'