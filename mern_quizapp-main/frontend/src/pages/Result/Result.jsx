import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Text, Progress, Spacer, Container, Grid } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Nav from '../../components/Nav';
import Foot from '../../components/Foot';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

function Result() {
    const [isConfettiActive, setConfettiActive] = useState(true);
    const navigate = useNavigate();
    const Leaderboard = ()=>{
        navigate("/leaderboard");
    }
    const addResult = async ()=>{
        console.log("add res is called");
        const response = await fetch('http://localhost:5000/api/addresult', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({uname: localStorage.getItem("uname"), score: localStorage.getItem("score"), qname: localStorage.getItem("qname")})
        });
        const res=await response.json();
        if(!res.success){
            alert('result was not added to the leaderboard due to an err..');
        } 
    }
    useEffect(() => {
        // Deactivate the confetti after a certain duration
        const duration = 3000; 
        const confettiTimeout = setTimeout(() => {
          setConfettiActive(false);
        }, duration);
    
        // Clear timeouts on component unmount
        return () => {
          clearTimeout(confettiTimeout);
        };
      }, []);
    
    return (<>
            <Nav/>
            <Container fluid style={{padding:"2rem"}} >
            <div style={{display: 'flex',justifyContent: 'center'}}>
                    <Confetti recycle={isConfettiActive}/>
            <Card isHoverable variant="bordered" css={{ mw: "600px" }}>
                <Card.Body>
                    <Text h4 b>{localStorage.getItem("uname")}</Text>
                    <Text>Your score: {localStorage.getItem("score")}/10</Text>
                    <Progress size="sm" value={localStorage.getItem("score")*10} shadow color="secondary" status="secondary" />
                    <Spacer/>
                    <Button color="secondary" auto onClick={Leaderboard}>View Leaderboard</Button>
                </Card.Body>
            </Card>
            </div>
            <Spacer/>
            <Text>Do you give us the permission to use add your name in our leaderboards</Text>
            <Grid.Container gap={2}>
                <Grid>
                        <Button auto color="secondary" rounded ghost onPress={addResult} >
                    Yes
                    </Button>
                </Grid>
                <Grid>
                            <Button auto color="error" rounded flat onPress={()=>{navigate('/')}} >
                        No, Return to home
                        </Button>
                </Grid>
            </Grid.Container>
            </Container>
            <Foot/>
            </>

    )
}

export default Result;