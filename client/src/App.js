import React from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';
import { loadUser } from './actions/authActions';
import { Container, Card, CardTitle, CardText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import { Component } from 'react';

// function App() {
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
          <br /><br /><br /><br /><br /><br /><br /><br /><br />
          <Card body>
            <CardTitle className="text-center">WebDevMa &copy; by Mohammed ETTAYBY</CardTitle>
            <CardText className="text-center">If you want to make a web app, Please Notify me</CardText>
            <Button>Send Message</Button>
          </Card>
        </div>
      </Provider>
    );
  }
}

export default App;