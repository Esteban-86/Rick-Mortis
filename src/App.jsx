import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.jsx";
import CharactersList from "./components/CharactersList.jsx";
import CharacterDetails from "./components/CharacterDetails.jsx";



const App = () => {
  return (
    <Router>
      <Header name="Esteban"/>
      <Routes>
        <Route exact path='/' element={<CharactersList />} />
        <Route path='/character/:id' element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
