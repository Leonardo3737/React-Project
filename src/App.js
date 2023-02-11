import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutProject from './components/AboutProject'

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import MyAnotations from './components/MyAnotations'
import CreateAnotation from './components/CreateAnotation';

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
