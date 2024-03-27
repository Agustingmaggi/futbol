import './App.css'
import RegistrationForm from "./pages/RegisterPages/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App
