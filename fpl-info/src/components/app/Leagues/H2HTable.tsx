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
import { EntryH2HLeague } from "fpl-api"
import { NavLink } from "react-router-dom"

type H2HTableProps = {
  h2h?: Array<EntryH2HLeague>
}

const H2HTable = ({ h2h }: H2HTableProps) => {
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
        {h2h?.map((head) => (
          <TableRow key={head.id}>
            <TableCell>
              {head.entry_rank < head.entry_last_rank ? (
                <FontAwesomeIcon
                  icon={faCircleChevronUp}
                  className='text-green-500'
                />
              ) : head.entry_rank === head.entry_last_rank ? (
                <FontAwesomeIcon icon={faCircle} className='text-gray-500' />
              ) : (
                <FontAwesomeIcon
                  icon={faCircleArrowDown}
                  className='text-red-500'
                />
              )}
            </TableCell>
            <TableCell>{head.entry_rank.toLocaleString()}</TableCell>
            <TableCell>
              <NavLink
                to={`/leagues/h2h/${head.id}`}
                className='text-primary font-bold hover:underline'
              >
                {head.name}
              </NavLink>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default H2HTable
