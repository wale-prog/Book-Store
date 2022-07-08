import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import BooksList from './components/BooksList';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Bookstore CMS</h1>
        <Nav />
      </div>

      <Switch>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route path="/">
          <BooksList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
