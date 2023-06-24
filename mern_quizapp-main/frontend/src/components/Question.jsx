import { Container,Text } from '@nextui-org/react'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Radio } from '@nextui-org/react';


function Question(props) {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (value) => {
        setSelectedOption(value);
        console.log("selected op: "+selectedOption);
        localStorage.setItem("option",value);
    };
    useEffect(()=>{
      setSelectedOption(null);
    },[props]);
  return (
    <Container fluid css={{mb:"1rem"}}>
        <Text blockquote style={{fontSize:"1.5rem"}}>Q {props.item.qno}. {props.item.question}</Text>
        <Radio.Group value={selectedOption} onChange={handleOptionChange} >
            <Radio value="op1" color="secondary" isSquared>A. {props.item.op1}</Radio>
            <Radio value="op2" color="secondary" isSquared>B. {props.item.op2}</Radio>
            <Radio value="op3" color="secondary" isSquared>C. {props.item.op3}</Radio>
            <Radio value="op4" color="secondary" isSquared>D. {props.item.op4}</Radio>
        </Radio.Group>
    </Container>
  )
}

export default Question