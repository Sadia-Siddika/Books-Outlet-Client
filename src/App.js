import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin/Admin';
import AdminRoute from './Components/Admin/AdminRoute/AdminRoute';
import UpdateBook from './Components/Admin/UpdateBook/UpdateBook';
import Dashboard from './Components/Dashboard/Dashboard';
import BookDetails from './Components/Explore/BookDetails/BookDetails';
import Explore from './Components/Explore/Explore';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Registration from './Components/Registration/Registration';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App () {
  return (
    <AuthProvider>
      <BrowserRouter>
        
        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/explore">
            <Explore></Explore>
          </Route>

          <PrivateRoute path="/bookDetails/:id">
            <BookDetails></BookDetails>
          </PrivateRoute>

          <PrivateRoute path="/updateBook/:id">
            <UpdateBook></UpdateBook>
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <AdminRoute path="/admin">
            <Admin></Admin>
          </AdminRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/registration">
            <Registration></Registration>
          </Route>

          <Route path="/*">
            <NotFound></NotFound>
          </Route>

        </Switch>

        <Footer></Footer>
        
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;