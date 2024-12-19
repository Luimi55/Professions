import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { makeStyles } from '@fluentui/react-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import TopBar from './components/TopBar';
import SignUp from './screens/SignUp';
import RequireAuth from './hooks/auth/RequireAuth';
import Home from './screens/Home';



const useStyles = makeStyles({
  root: { color: 'red' },
});
function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      {/* <TopBar/> */}
      <Routes>
        <Route path='/SignUp' Component={SignUp}/>
        <Route element={<RequireAuth/>}>
          <Route path='/' Component={Home}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
