import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import { Container } from '@mui/material';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

function App() {
  const lightTheme = createTheme({
    type: 'light',
    theme: {
      
    }
  })
  
  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      
    }
  })
  return (
    <NextThemesProvider
    defaultTheme="light"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
    <NextUIProvider >
    <Container>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/signup' element={<Signup/>}></Route>
        <Route exact path='/signin' element={<Signin/>}></Route>
        <Route exact path='/quiz' element={<Quiz/>}></Route>
        <Route exact path='/leaderboard' element={<Leaderboard/>}></Route>
        <Route exact path='/result' element={<Result/>}></Route>
      </Routes>
    </Router>
    </Container>
    </NextUIProvider>
    </NextThemesProvider>
  );
}

export default App;
