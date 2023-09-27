import { Link, Outlet } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCog,
  faTableColumns,
  faShirt,
  faRightLeft,
  faList,
  faFutbolBall,
} from "@fortawesome/free-solid-svg-icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import styles from "@/styles/DashboardLayout.module.css"
import { useFPLContext } from "@/lib/app-utils/context/fpl-context"

const DashboardNav = () => {
  const { entry } = useFPLContext()
  return (
    <div className='flex'>
      <div className='basis-1/6 bg-white'>
        <div className='flex justify-end p-4'>
          <FontAwesomeIcon icon={faCog} />
        </div>
        <div className='flex flex-col gap-4 justify-center items-center my-4 p-4'>
          <Avatar className='w-[96px] h-[96px]'>
            <AvatarImage />
            <AvatarFallback className='font-bold text-2xl'>
              {entry?.player_first_name.charAt(0).toUpperCase()}
              {entry?.player_last_name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className='font-bold text-center'>
            <div>
              {entry?.player_first_name} {entry?.player_last_name}
            </div>
            <div className='text-xs'>{entry?.name}</div>
          </div>
          <section id='flag'>
            <img
              src={`https://flagsapi.com/${entry?.player_region_iso_code_short}/flat/64.png`}
              alt='NP'
              className='w-8 h-8'
            />
          </section>
        </div>
        <section id='points' className='flex justify-evenly gap-4 text-center'>
          <div>
            <div className='font-bold text-lg'>
              {entry?.summary_overall_points}
            </div>
            <div className='text-gray-400 text-xs'>Total Points</div>
          </div>
          <div>
            <div className='font-bold text-lg'>
              {entry?.summary_overall_rank?.toLocaleString()}
            </div>
            <div className='text-gray-400 text-xs'>Overall ranking</div>
          </div>
        </section>
        <nav id='nav'>
          <ul className={styles.dashboard_nav}>
            <Link to='/'>
              <li className={styles.dasboard_nav__active}>
                <FontAwesomeIcon icon={faTableColumns} className='mr-4' />
                Overview
              </li>
            </Link>
            <Link to='/'>
              <li>
                <FontAwesomeIcon icon={faShirt} className='mr-4' />
                My Team
              </li>
            </Link>
            <Link to='/'>
              <li>
                <FontAwesomeIcon icon={faRightLeft} className='mr-4' />
                Transfers
              </li>
            </Link>
            <Link to='/'>
              <li>
                <FontAwesomeIcon icon={faList} className='mr-4' />
                League
              </li>
            </Link>
            <Link to='/'>
              <li>
                <FontAwesomeIcon icon={faFutbolBall} className='mr-4' />
                Fixtures
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className='basis-5/6'>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardNav
