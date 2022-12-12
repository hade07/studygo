import React, { useState } from "react"
import styled from "styled-components";


const Button = styled.button`
  display: block;
  padding: 6px 10px;
  color: #fff;
  font-size: 18px;
  border-radius: 3px;
  background-color: crimson;
  border: 0;
`;

function FixedSeats(props) {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let [btnActive, setBtnActive] = useState("");
    const [color, setColor] = useState('green');


    // 시트 상태값(색상) 바꾸기
    const toggleActive = (e) => {
      (color === 'green' ? setColor('grey') : setColor('green'));
    };

    const [isCheck, setIsCheck] = useState(false);

    //시트 상태값 바꾸기(자리 선점, 비선점 상태)
    const changeCheck = () => {
      setIsCheck(!isCheck);
    };
    

    return (
        
      <div className="container">
        {data.map((item, idx) => {
          return (
            <>
              <button color={color}
                value={idx}
                className={"btn" + (idx == btnActive ? 'blue' : 'red')}
                //onClick={toggleActive}
                onClick={() => {
                  toggleActive();
                  //setIsCheck();
                  }
                }

              >
                {item}
              </button>

           
            </>
          );
        })}
      </div>
    

    );

}



export default FixedSeats;

const container = styled.button`
  background-color: ${props => props.color};
`;