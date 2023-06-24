import { Container, Text, Link,Grid } from "@nextui-org/react";
import {
    AiFillFacebook,
    AiFillTwitterSquare,
    AiFillInstagram,
    AiFillLinkedin,
  } from "react-icons/ai";

const Foot = () => {
  return (
 
    <Container paddingY={2} >
    <hr/>
    <Grid.Container gap={1} style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
      <Grid >
       <Text color="secondary" h3 css={{mb:"$0"}}> QUIZZER</Text>
      </Grid>
      <Grid gap={2}>
      <Link block color="secondary" href="#">
    Home
  </Link>
  <Link block color="secondary" href="#">
    Leaderboard
  </Link>
  
      </Grid>
      <Grid>
      <Link href="#" color="secondary">
          
          <AiFillFacebook size={30}/>
        
      </Link>
      <Link href="#" color="secondary">
        
          <AiFillTwitterSquare size={30} />
        
      </Link>
      <Link href="#" color="secondary">
        
          <AiFillInstagram size={30} />
        
      </Link>
      <Link href="#" color="secondary">
        
          <AiFillLinkedin size={30} />
        
      </Link>
      </Grid>
      <Grid>
        <Text color="secondary">© 2023 Quizer. All rights reserved.</Text>
      </Grid>
    </Grid.Container>
  </Container>
  );
};

export default Foot;
