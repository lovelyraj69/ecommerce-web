import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import SwitchPage from './components/SwitchPage';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  const sendData = () => {
    axios.post('http://localhost:5000/api/data', { name: 'Eniyaraj' })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div>
      <SwitchPage />
    </div>
  );
}

export default App;
