import './App.css';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import User from './Components/User';

function App() {
  return (
    <Router>
      <Header title={"TODO List"} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
      <Footer display={"Made with ❤️ by Anshika"} />
    </Router >
  );
}

export default App;
