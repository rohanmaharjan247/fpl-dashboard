import { Navbar } from "@/components/app/common"
import { Outlet } from "react-router-dom"

import footballGround from "@/assets/markus-spiske-football-ground.jpg"
import martinOdegaard from "@/assets/martin-odegaard.png"

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='h-screen flex'>
        <Outlet />
        <div className='shrink basis-1/3 relative -z-10'>
          <img
            src={footballGround}
            alt='football ground'
            className='opacity-70 h-full'
          />
          <div className='absolute -left-32 inset-y-0 z-20'>
            <img
              src={martinOdegaard}
              alt='martin odegaard'
              className='w-full h-full'
            />
          </div>
          <div className='absolute bottom-4 right-4 text-xs text-primary-foreground'>
            Photo by{" "}
            <a href='https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Markus Spiske
            </a>{" "}
            on{" "}
            <a href='https://unsplash.com/photos/KWQ2kQtxiKE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
