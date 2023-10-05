import { useNextFixtures } from "@/lib/app-utils/hook"
import NextFixtureCard from "./NextFixtureCard/NextFixtureCard"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

const NextFixtures = () => {
  const { fixtures } = useNextFixtures()
  const navigate = useNavigate()

  return (
    <>
      <div className='mb-4'>
        <div className='font-semibold'>
          Gameweek {fixtures?.at(0)?.event} Fixtures
        </div>
        <div className='text-primary font-semibold text-sm'>
          {fixtures &&
            format(
              new Date(fixtures.at(0)!.kickoff_time),
              "EEEE, dd MMMM yyyy"
            )}
        </div>
      </div>
      <div className=''>
        {fixtures?.slice(0, 5).map((fixture) => (
          <NextFixtureCard fixture={fixture} key={fixture.code} />
        ))}
        <div className='text-right'>
          <Button variant={"link"} onClick={() => navigate("/fixtures")}>
            See More
            <FontAwesomeIcon icon={faArrowRightLong} className='ml-1' />
          </Button>
        </div>
      </div>
    </>
  )
}

export default NextFixtures
