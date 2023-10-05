import { useCurrentFixtures } from "@/lib/app-utils/hook"
import CurrentFixtureCard from "./CurrentFixtureCard/CurrentFixtureCard"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

const CurrentFixtures = () => {
  const { fixtures } = useCurrentFixtures()
  const navigate = useNavigate()
  return (
    <>
      <div className='mb-4'>
        <div className='font-semibold'>
          Gameweek {fixtures?.at(0)?.event} Fixtures
        </div>
        <div className='text-primary font-semibold text-sm'>Results</div>
      </div>
      <div>
        {fixtures?.slice(0, 5).map((fixture) => (
          <CurrentFixtureCard fixture={fixture} key={fixture.code} />
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

export default CurrentFixtures
