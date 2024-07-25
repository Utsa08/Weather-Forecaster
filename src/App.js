import { Route, Routes } from "react-router-dom";
import Weather from "./components/WeatherCard";
import axios from "axios";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/forecast";
axios.defaults.params = {};
axios.defaults.params["appid"] = process.env.API_KEY;

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element = {<Weather />} />
        <Route path="/:location" element = {<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
