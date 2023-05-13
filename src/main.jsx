import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import { CartProvider } from './context/CartContext.jsx'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
