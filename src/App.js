import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Pages/Footer/Footer';
import Singletravel from './Components/Pages/Singletravel/Singletravel';
import AuthProvider from './Context/AuthProvider';
import Protect from './Components/ProtectRoute/Protect';
import Login from './Components/Pages/RegistrationForm/Login';
import Registration from './Components/Pages/RegistrationForm/Registration';
import Myorder from './Components/Pages/MyORder/Myorder';
import ManageOrder from './Components/Pages/ManageOrder/ManageOrder';
import NewTourist from './Components/Pages/NewTourist/NewTourist';

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Protect path="/singletravel/:id">
            <Singletravel></Singletravel>
          </Protect>
          <Protect path="/myorder">
            <Myorder></Myorder>
          </Protect>
          <Protect path='/manageorder'>
            <ManageOrder></ManageOrder>
          </Protect>
          <Protect path='/newtourist'>
            <NewTourist></NewTourist>
          </Protect>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Registration></Registration>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
    </AuthProvider>
      
    </>
  );
}

export default App;
