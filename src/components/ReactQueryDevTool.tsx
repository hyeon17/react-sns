import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function ReactQueryDevTool() {
  return import.meta.env.MODE === "development" ? (
    <ReactQueryDevtools initialIsOpen={false} />
  ) : null;
}

export default ReactQueryDevTool;
