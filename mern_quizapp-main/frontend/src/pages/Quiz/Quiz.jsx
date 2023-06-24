import React, { useState } from 'react';
import { useEffect } from 'react';
import Nav from '../../components/Nav';
import Foot from '../../components/Foot';
import { Container, Button, Text } from '@nextui-org/react';
import Question from '../../components/Question';
import { useNavigate } from 'react-router-dom';


function Quiz() {
  const [questions,setQuestions] = useState([]);
  const [qno, setQno] = useState(1);
  const navigate = useNavigate();
  const getQuestions = async()=>{
    const response = await fetch('http://localhost:5000/api/getquestions', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({quizname: localStorage.getItem("qname")})
    });
    const res=await response.json();
    if(res.success){
      setQuestions(res.questions);
      console.log(res.questions);
    }
    else{
      alert('err fetching questions of '+localStorage.getItem("qname"));
    }
  }
  useEffect(() => {
    getQuestions();
  }, []);
  const save = ()=>{
    const currentQsn = questions.filter((item)=>(item.qno === qno));
    if(localStorage.getItem("option") === currentQsn[0].answer){
      localStorage.setItem("score",parseInt(localStorage.getItem("score"))+1);
    }
    setQno(qno+1);
    localStorage.setItem("option","");
  }
  const next = ()=>{
    setQno(qno+1);
    localStorage.setItem("option","");
  }
  const result = ()=>{
    const currentQsn = questions.filter((item)=>(item.qno === qno));
    if(localStorage.getItem("option") === currentQsn[0].answer){
      localStorage.setItem("score",parseInt(localStorage.getItem("score"))+1);
    }
    navigate("/result");
  }
  return (
    <>
      <Nav/>
      <Text
        h2
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",pl:"2rem",marginTop:"1rem",textAlign:"center"
        }}
        weight="bold"
      >Attempting quiz ...</Text>
      <Container fluid style={{border:"0.1rem solid",padding:"1rem",borderRadius:"0.7rem",marginBottom:"1rem"}} css={{color:"$secondary"}}>
        
        {(questions).filter((item)=>{ return item.qno === qno}).map((ele)=>{return <>
          <Question item={ele}/>
        </>})}


        
        {qno === 10 ? (
          <>
            <Button  color="success" auto ghost style={{display:'inline-block',marginLeft:"0.5rem",marginTop:"1em",width:"100%"}} onClick={result}>Submit</Button>
          </>
        ) : (
          <>
            <Button ghost color="success" auto style={{display:'inline-block',marginLeft:"2rem",marginTop:"1em"}} onClick={save}>Save and Next</Button>
            <Button ghost color="secondary" auto style={{display:'inline-block',textAlign:"right",}} onClick={next}>Skip</Button>
          </>
        )}
        
      </Container>
      <Foot/>
    </>
  )
}

export default Quiz;