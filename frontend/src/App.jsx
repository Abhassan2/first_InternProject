import Navbar from './components/Navbar.jsx';
import Home from '../pages/Home.jsx';
import Event from '../pages/Event.jsx';
import Feedback from '../pages/Feedback.jsx';
import DisplayFeedback from '../pages/DisplayFeedback.jsx';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const apiBaseUrl = import.meta.env.VITE_BACKEND_URL
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home apiBaseUrl={apiBaseUrl } />} />
        <Route path="/events" element={<Event apiBaseUrl={apiBaseUrl } />} />
        <Route path="/feedback" element={<Feedback apiBaseUrl={apiBaseUrl } />} />
        <Route path="/allfeedback" element={<DisplayFeedback apiBaseUrl={apiBaseUrl } />} />
      </Routes>
      <ToastContainer 
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default App
