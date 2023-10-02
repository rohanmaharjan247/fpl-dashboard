import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  faCircle,
  faCircleArrowDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { EntryClassicLeague } from "fpl-api"
import { NavLink } from "react-router-dom"

type LeagueTableProps = {
  leagues?: Array<EntryClassicLeague>
}

const LeagueTable = ({ leagues }: LeagueTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Rank</TableHead>
          <TableHead>Leagues</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leagues
          ?.filter((x) => x.league_type === "x")
          .map((league) => (
            <TableRow key={league.id}>
              <TableCell>
                {league.entry_rank < league.entry_last_rank ? (
                  <FontAwesomeIcon
                    icon={faCircleChevronUp}
                    className='text-green-500'
                  />
                ) : league.entry_rank === league.entry_last_rank ? (
                  <FontAwesomeIcon icon={faCircle} className='text-gray-500' />
                ) : (
                  <FontAwesomeIcon
                    icon={faCircleArrowDown}
                    className='text-red-500'
                  />
                )}
              </TableCell>
              <TableCell>{league.entry_rank.toLocaleString()}</TableCell>
              <TableCell>
                <NavLink
                  to={`/leagues/${league.id}`}
                  className='text-primary font-bold hover:underline'
                >
                  {league.name}
                </NavLink>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}

export default LeagueTable
