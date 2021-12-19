import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddExpense from './components/AddExpense/AddExpense';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/add-expense'>
            <AddExpense />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
