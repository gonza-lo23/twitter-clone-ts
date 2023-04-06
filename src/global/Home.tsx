import React from 'react';
import Navbar from '../components/Navbar';
import Feed  from '../components/Feed';
import {HStack,Text,GridItem, Grid, Stack, StackDivider, Container} from '@chakra-ui/react';

interface Props {
    products : string;
}

const Home = () =>{
  return (
    <Container 
    alignSelf={'center'}
    margin={1}
    marginLeft={1}
    spacing={5}
    >
   <Grid
    templateAreas={`"NavBar Feed Politics"`}
    gridTemplateColumns={'22rem  37rem 28rem'}
    alignItems='center'
      >
<Stack
borderRightColor={'gray.500'}
borderRightWidth={'0.1px'}
height='100%'
 >
<GridItem 
  padding={1}
  area={'NavBar'} 
  h='100%' w='100%'>     
  <Navbar/>
  </GridItem>
</Stack>

<Stack
borderRightColor={'gray.500'}
borderRightWidth={'0.1px'}
height='100%'
 >
  <GridItem  
  alignContent={'center'}
  area={'Feed'} 
  width='100%'
  height={'100%'}
  >
  <Feed/>
  </GridItem>
  </Stack>

  <GridItem  
  alignSelf={'center'}
   h='100%' 
  w='100%' 
  area={'Politics'} >
 <Text>Hola</Text>
  </GridItem>

    </Grid>
    </Container>
  )
  
};

export default Home;