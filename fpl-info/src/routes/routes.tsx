import App from "@/App"
import { DashboardLayout, MainLayout } from "@/layouts"
import Fixtures from "@/pages/Fixtures/Fixtures"
import { LeagueDetail, Leagues, H2HLeagueDetail } from "@/pages/League"
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
        children: [
          {
            index: true,
            element: <Leagues />,
          },
          {
            path: "league/:leagueId",
            element: <LeagueDetail />,
          },
          {
            path: "h2h/:h2hLeagueId",
            element: <H2HLeagueDetail />,
          },
        ],
      },
      {
        path: "/fixtures",
        element: <Fixtures />,
      },
    ],
  },
]
