// ErrorPage.jsx
import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.statusText || error.message || "Unknown error"}</p>
    </div>
  );
}
