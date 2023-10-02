import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react"
import "./index.css"
import { routes } from "./routes/routes.tsx"

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN_ID}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin + "/callback",
        audience: `https://${import.meta.env.VITE_AUTH0_DOMAIN_ID}/api/v2/`,
        scope: "profile email read:current_user update:current_user_metadata",
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
)
