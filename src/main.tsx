import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./components/theme/theme-provider";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppLayout } from "./components/layouts/app-layout";
import { ContentLayout } from "./components/layouts/content-layout";
import { TodoPage } from "./components/pages/todo/todo";
import { NotFoundAlert } from "./components/alert/not-found-alert";
import { CenteredLayout } from "./components/layouts/centered-layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route element={<ContentLayout />}>
              <Route index element={<App />} />
              <Route path="todo" element={<TodoPage />} />
            </Route>
            <Route element={<CenteredLayout />}>
              <Route path="*" element={<NotFoundAlert />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
