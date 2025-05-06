import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import WayRoute from './Components/Routes'
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <>
      <Toaster position='top-right'/>
      <WayRoute/>
    </>
  )
}

export default App
