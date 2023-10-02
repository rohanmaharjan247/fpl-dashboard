import App from "@/App"
import { DashboardLayout, MainLayout } from "@/layouts"
import { LeagueDetail, Leagues } from "@/pages/League"
import { Callback } from "@/pages/auth"
import { Dashboard, MyTeam } from "@/pages/dashboard"
import { RouteObject } from "react-router-dom"

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/callback",
        element: <Callback />,
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/my-team",
        element: <MyTeam />,
      },
      {
        path: "/leagues",
        element: <Leagues />,
      },
      {
        path: "/leagues/:leagueId",
        element: <LeagueDetail />,
      },
    ],
  },
]
