import { Container, Card, Input, Button, Text , Spacer,Link} from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Nav from "../../components/Nav";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/createuser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({  email: email, pass: password, uname:username })
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
        alert("Enter valid details of user");
    }
    else{ alert('Account has been created.\nPlease login to your account'); navigate("/signin");}
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
        Create account ...
        </Text>
        <form onSubmit={handleSubmit}>
          <Spacer y={1.5} />
          <Input
            bordered 
            labelPlaceholder="Name" 
            color="secondary"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Spacer y={1.5} />
          <Input
            bordered 
            labelPlaceholder="E-mail" 
            color="secondary"
            type = "email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Spacer y={1.5} />
          <Input.Password
            bordered 
            labelPlaceholder="Password" 
            color="secondary"
            type="password"
            value={password}
            helperText={"minimum 5 characters"}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" auto css={{m:'1rem',mt:"1.8rem"}}>
            Sign Up
          </Button>
        </form>

        <Link block color="secondary" onClick={()=>{navigate("/signin")}}>
        Already having an account?
      </Link>
      </Card>
    </Container>
    </>
  );
};

export default SignUpForm;
