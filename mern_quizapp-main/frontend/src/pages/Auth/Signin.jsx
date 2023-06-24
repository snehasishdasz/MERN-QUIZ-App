import { Container, Card, Input, Button, Text , Spacer, Link} from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Nav from "../../components/Nav";
const SignUpForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginuser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, pass: password})
    });
    const res = await response.json();
    //console.log(res);
    
    if (!res.success) {
        alert("Enter valid details of your account");
    }
    else{
        localStorage.setItem("authToken",res.authToken);
        localStorage.setItem("uname",res.uname);
        navigate("/");
    }
  };

  return (
    <>
    <Nav/>
    <Container
      align="center"
      justify="center"
      style={{ display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
         }}
      fluid
    >
      
      <Card shadow style={{
        maxWidth:"50%",
        padding:"1rem"
      }}>
      <Text h2 css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%",pl:"2rem"}} weight="bold">
        Fill login details ...
        </Text>
        <form onSubmit={handleSubmit}>
        <Spacer y={1.5} />
          <Input
            bordered 
            labelPlaceholder="email" 
            color="secondary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Spacer y={1.5} />
          <Input.Password
            bordered 
            labelPlaceholder="password" 
            color="secondary"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" auto css={{m:'1rem'}}>
            Login
          </Button>
        </form>
        <Link block color="secondary" onClick={()=>{navigate("/signup")}}>
        Don't have  an account?
      </Link>
      </Card>
      
    </Container>
    </>
  );
};

export default SignUpForm;
