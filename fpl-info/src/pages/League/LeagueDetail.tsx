import { useParams } from "react-router-dom"

const LeagueDetail = () => {
  const { leagueId } = useParams()

  console.log("leagueId", leagueId)

  return <div>LeagueDetail</div>
}

export default LeagueDetail
