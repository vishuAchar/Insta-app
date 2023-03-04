import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import NoteContext from '../context/notes/NoteContext'


function NavBar() {
  const user = useContext(NoteContext)

  return (
    <div>
        

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="navBarcontainer">
            <Link className="navbarbrand" to="/">Borosil</Link>
          
           

            <div className="" id="navbarNav">

              <ul className="navbar-menu">
                
              <li className="navItems">
                  <Link className="nav-link" to="/">Login</Link>
                </li>


                <li className="navItems">
                  <Link className="nav-link active" aria-current="page" 
                  to="/addPost"
                  >Add Post</Link>
                </li>

                <li className="navItems">
                  <Link className="nav-link" to="/viewPost">View Post</Link>
                </li>

              </ul>

            </div>

          </div>
        </nav>
      
    </div>
  )
}

export default NavBar
