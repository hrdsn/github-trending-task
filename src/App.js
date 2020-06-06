import React from 'react';
import Itemlist from './components/Itemlist/Itemlist';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="container">Github trending</div>
      </div>
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="d-none d-lg-block d-xl-block col-lg-3">
              <h3>sidebar</h3>
            </div>
            <div className="col-lg-9 col-md-12">
              <Itemlist />
            </div>
          </div>
        </div>
      </main>
      <div className="footer">
        {' '}
        <div className="container">© 2020 Github trending 2020</div>
      </div>
    </div>
  );
}

export default App;
