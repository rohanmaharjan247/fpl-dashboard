import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEntryH2HLeagueDetail } from "@/lib/app-utils/hook"
import {
  faCircle,
  faCircleArrowDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useParams } from "react-router-dom"

const H2HLeagueDetail = () => {
  const { h2hLeagueId } = useParams()

  const { entryH2HLeagueDetail, isLoading } = useEntryH2HLeagueDetail(
    Number(h2hLeagueId)
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className='p-4'>
      <div className='text-2xl font-bold'>
        {entryH2HLeagueDetail?.league.name}
      </div>
      <div className='card my-4'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Team & Manager</TableHead>
              <TableHead className='text-right'>Games Played</TableHead>
              <TableHead className='text-right'>Win</TableHead>
              <TableHead className='text-right'>Loss</TableHead>
              <TableHead className='text-right'>Draw</TableHead>
              <TableHead className='text-right'>Total Pts.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entryH2HLeagueDetail?.standings.results.map((standing) => (
              <TableRow key={standing.id}>
                <TableCell>
                  <span>
                    {standing.rank < standing.last_rank ? (
                      <FontAwesomeIcon
                        icon={faCircleChevronUp}
                        className='text-green-500'
                      />
                    ) : standing.rank === standing.last_rank ? (
                      <FontAwesomeIcon
                        icon={faCircle}
                        className='text-gray-500'
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faCircleArrowDown}
                        className='text-red-500'
                      />
                    )}
                  </span>
                  <span className='pl-2'>{standing.rank}</span>
                </TableCell>
                <TableCell>
                  <div className='font-semibold'>{standing.entry_name}</div>
                  <div>{standing.player_name}</div>
                </TableCell>
                <TableCell className='text-right'>
                  {standing.matches_played}
                </TableCell>
                <TableCell className='text-right'>
                  {standing.matches_won}
                </TableCell>
                <TableCell className='text-right'>
                  {standing.matches_lost}
                </TableCell>
                <TableCell className='text-right'>
                  {standing.matches_drawn}
                </TableCell>
                <TableCell className='text-right font-semibold'>
                  {standing.total}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default H2HLeagueDetail
