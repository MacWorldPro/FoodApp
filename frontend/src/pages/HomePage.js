import React, { useContext } from 'react'
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import SearchBox from '../components/SearchBox';
import useOnLine from '../utils/hooks/useOnLine';
import Tictactoe from '../components/offline/Tictaktoe';
import themeContext from '../utils/context/themeContext';
import { Button } from '@chakra-ui/react';
import H from '../components/H';


 const HomePage = () => {

  const online=useOnLine();

  return (!online)?(<Tictactoe/>):(
    
    <>

        <Header/>
        
        <SearchBox></SearchBox>
        <Body></Body>
        <Footer></Footer>
    </>
  )
}

export default HomePage;
