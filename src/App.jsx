import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutProject from './pages/AboutProject'

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import MyAnotations from './pages/MyAnotation'
import CreateAnotation from './pages/CreateAnotations';

function App() {

  return (
    <Router>
      
      <Routes>
        <Route exact path='/' element={<AboutProject />}/>
        <Route exact path='/SignUp' element={<SignUp />}/>
        <Route exact path='/SignIn' element={<SignIn />}/>
        <Route exact path='/MyAnotations' element={<MyAnotations/>}/>
        <Route exact path='/CreateAnotation' element={<CreateAnotation/>}/>
      </Routes>
    </Router>
  );

}

export default App;
