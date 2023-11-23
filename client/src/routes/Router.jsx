import { Route, Routes } from "react-router-dom";
import App from "../App";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import WhatWeDo from "../pages/what-we-do/WhatWeDo";
import { doingsPageContent } from "../util/content";

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <App>
            <Layout />
          </App>
        }
      >
        <Route index element={<Home />} />
        {doingsPageContent.map((content) => (
          <Route
            key={content.id}
            path={`what-we-do/${content.id}`}
            element={<WhatWeDo content={content} />}
          />
        ))}
      </Route>
    </Routes>
  );
}
