
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailForm from './ui-components/EmailForm';
import {Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <h1>Welcome to OTP app</h1>
     <Routes>
        <Route path="/" element={<EmailForm/>}/>
        </Routes>
    </div>
  );
}

export default App;
