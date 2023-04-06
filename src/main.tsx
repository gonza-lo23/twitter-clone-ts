import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import Theme from './styles/theme';
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={Theme}>
    <App />
    </ChakraProvider>
 ,
)
