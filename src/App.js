
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './containers/Contact/Contact';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
      

        </Switch>

        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
