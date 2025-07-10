import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

function LoadingMessage() {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">BluePay</h1>
        <p className="text-xl">Carregando seu dashboard financeiro...</p>
      </div>
    </div>
  );
}