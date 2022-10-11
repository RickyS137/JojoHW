import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainComponent from './components/mainComponent';
import InfoCard from './containers/infoCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainComponent/>}/>
        <Route path='/user=:name' element={<InfoCard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
