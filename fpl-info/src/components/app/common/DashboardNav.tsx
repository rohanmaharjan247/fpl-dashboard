import { NavLink, Outlet } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCog,
  faTableColumns,
  faShirt,
  faRightLeft,
  faList,
  faFutbolBall,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import styles from "@/styles/DashboardLayout.module.css"
import { useFPLContext } from "@/lib/app-utils/context/fpl-context"
import { useAuth0 } from "@auth0/auth0-react"

const DashboardNav = () => {
  const { entry } = useFPLContext()
  const { user, logout } = useAuth0()
  return (
    <div className='relative'>
      <div className='fixed inset-y-0 left-0 bg-white'>
        <div className='flex justify-end p-4'>
          <FontAwesomeIcon icon={faCog} />
        </div>
        <div className='flex flex-col gap-4 justify-center items-center my-4 p-4 mx-16'>
          <Avatar className='w-[96px] h-[96px]'>
            <AvatarImage src={user?.picture} />
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
        <section
          id='points'
          className='flex justify-evenly gap-4 text-center mx-16'
        >
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
            <NavLink
              to='/dashboard'
              className={({ isActive }) =>
                isActive ? styles.dasboard_nav__active : ""
              }
            >
              <li>
                <FontAwesomeIcon icon={faTableColumns} className='mr-4' />
                Overview
              </li>
            </NavLink>
            <NavLink
              to='/my-team'
              className={({ isActive }) =>
                isActive ? styles.dasboard_nav__active : ""
              }
            >
              <li>
                <FontAwesomeIcon icon={faShirt} className='mr-4' />
                My Team
              </li>
            </NavLink>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? styles.dasboard_nav__active : ""
              }
            >
              <li>
                <FontAwesomeIcon icon={faRightLeft} className='mr-4' />
                Transfers
              </li>
            </NavLink>
            <NavLink
              to='/leagues'
              className={({ isActive }) =>
                isActive ? styles.dasboard_nav__active : ""
              }
            >
              <li>
                <FontAwesomeIcon icon={faList} className='mr-4' />
                League
              </li>
            </NavLink>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? styles.dasboard_nav__active : ""
              }
            >
              <li>
                <FontAwesomeIcon icon={faFutbolBall} className='mr-4' />
                Fixtures
              </li>
            </NavLink>
            <button onClick={() => logout()}>
              <li>
                <FontAwesomeIcon icon={faPowerOff} className='mr-4' />
                Logout
              </li>
            </button>
          </ul>
        </nav>
      </div>
      <div className='absolute left-[20rem] inset-y-0 right-0'>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardNav
