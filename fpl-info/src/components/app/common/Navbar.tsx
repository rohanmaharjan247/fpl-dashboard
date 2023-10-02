import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='flex gap-32 px-16 py-4 fixed top-0 w-full'>
      <div className='text-4xl font-bold'>
        <Link to='/'>Fantasy Frenzy</Link>
      </div>
    </nav>
  )
}

export default Navbar
