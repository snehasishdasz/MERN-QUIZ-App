import { Navbar, Button, Link, Text} from "@nextui-org/react";
import { styled } from "@nextui-org/react";
import React, { useEffect } from 'react';
import { Link as LinkR, useNavigate} from 'react-router-dom';
import Darkmode from "./Darkmode";
import { useState } from "react";


const AcmeLogo = () => (
  <svg
    className="" 
    fill="none"
    height="36"
    viewBox="0 0 32 32"
    width="36"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const Box = styled("div", {
  boxSizing: "border-box",
});

export default function Nav() {

  const handleNavItemClick = (navItem) => {
    localStorage.setItem("activeitem",navItem);
  };
  const logout = ()=>{
    localStorage.removeItem("authToken");
    localStorage.removeItem("uname");
    navigate("/");
  }
  const navigate = useNavigate();
  return (
    <Box css={{ maxW: "100%" }}>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            QUIZER
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link isActive={localStorage.getItem("activeitem") === 'home'} onClick={() => handleNavItemClick('home')}><LinkR to="/" >Home</LinkR></Navbar.Link>
          <Navbar.Link isActive={localStorage.getItem("activeitem") === 'lead'} onClick={() => handleNavItemClick('lead')}>
          <LinkR to="/leaderboard">Leaderboard</LinkR>
          </Navbar.Link>
          
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Darkmode/>
          </Navbar.Item>
          {(localStorage.getItem("authToken"))?
          <>
            <Navbar.Item >
                <Text color="secondary"> {localStorage.getItem("uname")}</Text>
            </Navbar.Item>
            <Navbar.Item>
              <Button auto flat as={Link} onClick={logout} color="secondary">
                  Logout
              </Button>
            </Navbar.Item>
          </>:
          <>
            <Navbar.Link color="inherit">
              <LinkR to="/signin">Login</LinkR>
            </Navbar.Link>
            <Navbar.Item>
              <Button auto flat as={Link}>
                  <LinkR to="/signup">Signup</LinkR>
              </Button>
            </Navbar.Item>
          </>}
          
        </Navbar.Content>
        <Navbar.Collapse css={{ maxW: "40%" }}>
            <Navbar.CollapseItem key="home">
              <Link color="inherit" css={{minWidth: "100%", }}>
                <LinkR to="/">Home</LinkR>
              </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem key="leaderboard">
              <Link color="inherit" css={{minWidth: "100%", }}>
              <LinkR to="/leaderboard">Leaderboard</LinkR>
              </Link>
            </Navbar.CollapseItem>
            
        </Navbar.Collapse>
      </Navbar>
    </Box>
  );
}
