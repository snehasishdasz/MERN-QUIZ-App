import React, { useEffect } from 'react'
import FeaturedPost from "../../components/FeaturedPost";
import Nav from '../../components/Nav';
import Foot from '../../components/Foot';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Text, Grid, Modal, Row, Button } from '@nextui-org/react';


function Home() {
  const navigate = useNavigate();
    const startQuiz = (e)=>{
        if(e.target){
          if(!localStorage.getItem("authToken")){
            setVisible(true);
          }
          else{
            const qname = e.target.dataset.name;
            console.log(qname);
            localStorage.setItem("qname",qname);
            localStorage.setItem("score",0);
            localStorage.setItem("qno",1);
            localStorage.setItem("option","");
            navigate("/quiz");
          }
        }
    }
    const [visible, setVisible] = React.useState(false);
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };
    const signin = ()=>{
      navigate("/signin");
    }
    useEffect(()=>{localStorage.setItem("activeitem",'home');},[])
  return (
    <div>
      <Nav/>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to <span>  </span>
            <Text b size={18}>
              QUIZER
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            Please login to proceed. 
          </Text>
          <Row justify="space-between">
            
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={signin}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <Button variant="contained" startIcon={<SendIcon />}>Hello World</Button> */}
      {/* <Container>
      <Toolbar className={classes.tagline}>ONLINE QUIZ</Toolbar>
      
      <FeaturedPost />
      <br />
      <Grid container spacing={4}  >
        
            <PostCard title="Science" description="Science is the action to find out any fact regarding the natural world." image="https://img.freepik.com/free-vector/colorful-science-objects-icons-vector-set_1308-131708.jpg?w=2000" onclick={startQuiz("ccc")}/>
            <PostCard title="General Knowledge" description="GK is very useful and important in one's life. It informs us of everything " image="./gk.png" qname="GK" />
            <PostCard title="Physics" description="Physics is a branch of science. It is one of the most fundamental scientific disciplines." image="https://i.pinimg.com/736x/9f/cf/03/9fcf03460710d991aa56fe671f3e0d58.jpg" />
            <PostCard title="Chemistry" description="Chemistry is the branch of science that deals with the properties, composition." image="https://i.pinimg.com/originals/22/72/2b/22722b33f4d7e9d810c6bce2fe678128.jpg" />
      </Grid>
      </Container> */}
      <Container css={{pt:"2rem"}}>
      {/* <Toolbar className={classes.tagline}>ONLINE QUIZ</Toolbar> */}
      
      <FeaturedPost />
      <Text
        h2 style={{textDecoration:"underline", textShadow:"12px 12px black black"}}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",pl:"4rem", ds:"$lg",textAlign: "center",
        }}
        weight="bold"
      >QUIZES</Text>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={6}>
          <Card isPressable isHoverable variant="bordered" css={{ mw: "500px" }} onPress={startQuiz} data-name="Science" >
            <Grid.Container gap={2}>
              <Grid xs={8}>
                <div>
                <Card.Header>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  Science
                </Text>
                </Card.Header>
                <Card.Body css={{ py: "$2" }}>
                  <Text css={{ color: "$accents8" }}>
                  Science is the action to find out any fact regarding the natural world.
                  </Text>
                </Card.Body>
                </div>
              </Grid>
              <Grid xs={4}>
                <img src='https://img.freepik.com/free-vector/colorful-science-objects-icons-vector-set_1308-131708.jpg?w=2000' alt='err' style={{"objectFit":"cover"}}/>
              </Grid>
            </Grid.Container>
          </Card>
        </Grid>

        <Grid xs={12} sm={6}>
          <Card isPressable isHoverable variant="bordered" css={{ mw: "500px" }} onPress={startQuiz} data-name="GK" >
            <Grid.Container gap={2}>
              <Grid xs={8}>
                <div>
                <Card.Header>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  General Knowledge
                </Text>
                </Card.Header>
                <Card.Body css={{ py: "$2" }}>
                  <Text css={{ color: "$accents8" }}>
                  GK is very useful and important in one's life. It informs us of everything.
                  </Text>
                </Card.Body>
                </div>
              </Grid>
              <Grid xs={4}>
                <img src='./gk.png' alt='err' style={{"objectFit":"cover"}}/>
              </Grid>
            </Grid.Container>
          </Card>
        </Grid>

        <Grid xs={12} sm={6}>
          <Card isPressable isHoverable variant="bordered" css={{ mw: "500px" }}>
            <Grid.Container gap={2}>
              <Grid xs={8}>
                <div>
                <Card.Header>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  Physics
                </Text>
                </Card.Header>
                <Card.Body css={{ py: "$2" }}>
                  <Text css={{ color: "$accents8" }}>
                  Physics is a branch of science. It is one of the most fundamental scientific disciplines.
                  </Text>
                </Card.Body>
                </div>
              </Grid>
              <Grid xs={4}>
                <img src='https://i.pinimg.com/736x/9f/cf/03/9fcf03460710d991aa56fe671f3e0d58.jpg' alt='err' style={{"objectFit":"cover"}}/>
              </Grid>
            </Grid.Container>
          </Card>
        </Grid>

        <Grid xs={12} sm={6}>
          <Card isPressable isHoverable variant="bordered" css={{ mw: "500px" }} >
            <Grid.Container gap={2}>
              <Grid xs={8}>
                <div>
                <Card.Header>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  Chemistry
                </Text>
                </Card.Header>
                <Card.Body css={{ py: "$2" }}>
                  <Text css={{ color: "$accents8" }}>
                  Chemistry is the branch of science that deals with the properties, composition.
                  </Text>
                </Card.Body>
                </div>
              </Grid>
              <Grid xs={4}>
                <img src='https://i.pinimg.com/originals/22/72/2b/22722b33f4d7e9d810c6bce2fe678128.jpg' alt='err' style={{"objectFit":"cover"}}/>
              </Grid>
            </Grid.Container>
          </Card>
        </Grid>
      </Grid.Container>
        
      </Container>  
      <Foot/>
    </div>
  )
}

export default Home;