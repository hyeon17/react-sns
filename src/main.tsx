import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { worker } from "@/mock/browser";
import { MSWStatus } from "@/constants";
import GlobalStyle from "@/styles/createGlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQueryDevTool from "@/components/ReactQueryDevTool";

if (import.meta.env.VITE_MOCKING_ENABLE === MSWStatus.ACTIVE) {
  worker.start({ onUnhandledRequest: "bypass" });
}

const queryClient = new QueryClient(
  import.meta.env.MODE === "development"
    ? { defaultOptions: { queries: { networkMode: "always" } } }
    : undefined
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
      <ReactQueryDevTool />
    </QueryClientProvider>
  </React.StrictMode>
);
