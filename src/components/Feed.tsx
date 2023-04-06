import * as React from 'react'
import {Stack,Input,VStack,Box,StackDivider,Container,Text, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';



const Feed: React.FC = () => {
  return (
    <Stack 
    padding={2}
    width='100%'
    height='100%'
    >

     
      <VStack
  divider={<StackDivider borderColor='gray.500'  />}
  spacing={4}
  width='100%'
  align='stretch'
>
<Stack height='100%' width='100%' margin={1} >
      <Box
      marginLeft={12}
      >
        <Input
        borderRadius={55}
        width={'30rem'}
         placeholder='Search' />
      </Box>
      <Stack
      direction={'row'}
      spacing={'4.2rem'} 
      >
       <Text marginLeft={3} fontWeight={'bold'}>Hola</Text>
       <Text fontWeight={'bold'}>Hola</Text>
       <Text fontWeight={'bold'}>Hola</Text>
       <Text fontWeight={'bold'}>Hola</Text>
       <Text fontWeight={'bold'}>Hola</Text>

      </Stack>
     </Stack>

     <Stack >
     <Box padding='6' boxShadow='lg' bg='grey.700'>
     <SkeletonCircle size='10' />
     <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
     </Box>
     </Stack>
     <Stack spacing={6}>
     <Box padding='6' boxShadow='lg' bg='grey.700'>
     <SkeletonCircle size='10' />
     <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
     </Box>
     </Stack>
     <Stack>
     <Box padding='6' boxShadow='lg' bg='grey.700'>
     <SkeletonCircle size='10' />
     <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
     </Box>
     </Stack>
     <Stack>
     <Box padding='6' boxShadow='lg' bg='grey.700'>
     <SkeletonCircle size='10' />
     <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
     </Box>
     </Stack>
     <Stack>
     <Box padding='6' boxShadow='lg' bg='grey.700'>
     <SkeletonCircle size='10' />
     <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
     </Box>
     </Stack>
     </VStack>
    </Stack>
  )
}

export default Feed