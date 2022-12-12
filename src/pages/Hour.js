import React, { useState } from 'react';


function Hour(props) {
    const [value, setValue]=useState("");
    const handleValue = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        alert('선택한 요금제는 : ' + value + '입니다');
        e.preventDefault();
    }


    return (
        
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label>
                    시간 요금제를 선택하세요:
                    <select value={value} onChange={handleValue}>
                        <option value="2시간">2시간 4천원</option>
                        <option value="4시간">4시간 7천원</option>
                        <option value="6시간">6시간 9천원</option>
                        <option value="8시간">8시간 1만원</option>
                    </select>
                </label>
                <button type='submit'>확인</button>
            </form>
       
        </div>
    

    ) ;
}

export default Hour;