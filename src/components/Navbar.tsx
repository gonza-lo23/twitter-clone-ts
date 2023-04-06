import * as React from 'react';
import { Button,HStack,StackDivider, Icon, Text, Stack, Container} from '@chakra-ui/react';
import {FaTwitter} from 'react-icons/fa';

interface Props {
  name:string;
  edad: number;
}

const Navbar: React.FC <Props> = ({name}) => {
  return (
    <Container margin={0} padding={0} position={'absolute'}>
     <Stack display='flex' flexDirection='column' height="100%">
      <Stack direction='row' margin={3}>
      <Icon as={FaTwitter}/>
      <Text>Hola</Text>
      </Stack>
      <Stack direction='row' margin={3}>
      <Icon as={FaTwitter}/>
      <Text>Hola</Text>
      </Stack>
      <Stack direction='row' margin={3}>
      <Icon as={FaTwitter}/>
      <Text>Hola</Text>
      </Stack>
      <Stack direction='row' margin={3}>
      <Icon as={FaTwitter}/>
      <Text>Hola</Text>
      </Stack>
     </Stack>
    </Container>
  )
}

export default Navbar