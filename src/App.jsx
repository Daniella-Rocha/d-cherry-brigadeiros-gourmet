import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';

import WhatsAppBtn from './components/WhatsAppBtn/WhatsAppBtn';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppBtn />
    </div>
  )
}

export default App
