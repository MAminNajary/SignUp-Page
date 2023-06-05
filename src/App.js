import { Route, Routes, Navigate } from 'react-router-dom';

import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/' element={<Navigate to='/signUp'/>}/>
      </Routes>
    </div>
  );
}

export default App;
