import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={
        <div className="app-split-layout">
          <div className="app-left">
            <Welcome />
          </div>
          <div className="app-right">
            <Login />
          </div>
        </div>
      } />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
