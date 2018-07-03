import React, { Component } from 'react';

import './App.css';
import Header from './Header';
import MainBody from './MainBody';
import Advert from './Advert';
import Footer from './Footer';
import ClickBait from './ClickBait';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <MainBody />
          <aside className="large-4 medium-12 columns">
            <Advert />
          </aside>
          <ClickBait />
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;