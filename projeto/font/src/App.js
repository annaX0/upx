
import axios from 'axios'
import Login from './pages/login/Login';
import  './global.css'
import NewAccount from './pages/NewAccount/NewAccount';
import Agenda from './pages/agenda/Agenda';
import Agendamento from './pages/agendamento/Agendamento';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Notification from './pages/notification/Notification';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login></Login>}/>
        <Route path='/newAccount' element={<NewAccount></NewAccount>}/>
        <Route path='/agenda' element={<Agenda></Agenda>}/>
        <Route path='/agendamento' element={<Agendamento></Agendamento>}/>
        <Route path='/notificacao' element={<Notification></Notification>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
