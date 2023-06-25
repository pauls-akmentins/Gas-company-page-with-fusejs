import { Routes, Route } from "react-router-dom";

import FourOhFour from "./FourOhFour";

import Main from "../content";
import CardView from "../content/cardView";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cards/:cardId" element={<CardView />} />
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
};

export default Router;
