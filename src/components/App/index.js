import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Form from '../Form';
import Repos from '../Repos';
import Message from '../Message';
import Nav from '../Nav';

import './App.css';

function App() {

  const [search, setSearch] = useState('');
  const [counter, setCounter] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const launchSearch = () => {
    console.log('Recherche en cours...')

    // axios
    axios
      .get(`https://api.github.com/search/repositories?q=${search}`)
      .then(response => {
        console.log(response);
        setCounter(response.data.total_count);
        setRepos(response.data.items);
        toast.success('Récupération API sans problème', {
          autoClose: 3000,
        })
      })
      .catch(error => {
        console.log('Une erreur est survenue');
        
      })
      .finally(() => console.log('Chargement fini'));
      setSearch('');
      setLoading(true);
  }

  const errorEmpty = () => {
    toast.error('Merci de saisir votre recherche avant de valider', {
      autoClose: 3000,
    })
  }

  const errorLength = () => {
    toast.error('Merci de saisir au moins 3 caractères', {
      autoClose: 3000,
    })
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />
          <Switch>
            <Route path="/" exact >
              <Form 
                search={search}
                setSearch={setSearch}
                doSubmit={launchSearch}
                errorEmpty={errorEmpty}
                errorLength={errorLength}
                />
            {
              loading && 
              <Message message={counter} />
            }
            {
              loading  &&  
              <Repos repos={repos}/>
            }
            </Route>
          </Switch>
          <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
