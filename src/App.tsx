import LocationPage from "./components/LocationPage";
import LocationDetail from "./components/LocationDetail";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="relative sm:p-8 p-4 min-h-screen flex flex-row justify-center">
      <Routes>
        <Route path="/" element={<LocationPage />} />
        <Route path="/:id" element={<LocationDetail />} />
      </Routes>
    </div>
  )
}

export default App;
