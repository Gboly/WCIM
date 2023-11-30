import { Route, Routes } from "react-router-dom";
import App from "../App";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import WhatWeDo from "../pages/what-we-do/WhatWeDo";
import { doingsPageContent } from "../util/content";
import { AnimatePresence } from "framer-motion";
import GivingCatalog from "../pages/giving-catalog/GivingCatalog";
import Volunteering from "../pages/volunteering/Volunteering";

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
        <Route
          index
          element={
            <AnimatePresence mode="wait">
              <Home />
            </AnimatePresence>
          }
        />
        {doingsPageContent.map((content) => (
          <Route
            key={content.id}
            path={`what-we-do/${content.id}`}
            element={
              <AnimatePresence mode="wait">
                <WhatWeDo content={content} key={content.id} />
              </AnimatePresence>
            }
          />
        ))}
        <Route
          path="get-involved/giving"
          element={
            <AnimatePresence mode="wait">
              <GivingCatalog />
            </AnimatePresence>
          }
        />
        <Route
          path="get-involved/volunteering"
          element={
            <AnimatePresence mode="wait">
              <Volunteering />
            </AnimatePresence>
          }
        />
      </Route>
    </Routes>
  );
}
