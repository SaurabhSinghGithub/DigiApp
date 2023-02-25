import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from './GlobalStyle';
import ScrollTop from './components/ScrollTop';


function App() {

  const theme = {
    colors: {
      white: "#fff",
      black: "black",
      header: "#abbff9",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
    },
    media: {
      mobile: "720px",
      tab: "960px"
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <ScrollTop />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
