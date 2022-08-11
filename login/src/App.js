import { Routes, Route } from 'react-router-dom';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Account from './Components/Account';
import { AuthContextProvider } from './Context/AuthContext';

function App() {
  return (
   <div>
    <h1>Firebase</h1>
  <AuthContextProvider>
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/account' element={<Account />} />
    </Routes>
    </AuthContextProvider>
   </div>
  );
}

export default App;