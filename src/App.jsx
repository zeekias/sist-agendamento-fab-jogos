import React, { useContext } from 'react'
import Login from './components/login/Login';
import { AuthContext } from './context/AuthContext';
import Dashboard from './components/dashboard/Dashboard';
function App() {
  const authContext = useContext(AuthContext);
  return (
    <div className="App w-full min-h-screen flex items-center justify-center ">
      {
        authContext.user === '' ?
          <Login /> : <Dashboard />
      }
    </div>
  );
}

export default App;
