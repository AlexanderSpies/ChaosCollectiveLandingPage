import * as React from "react";
import { ChakraProvider, theme, } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Home from './pages/teaser/teaser';

const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </ChakraProvider>
);

export default App;
