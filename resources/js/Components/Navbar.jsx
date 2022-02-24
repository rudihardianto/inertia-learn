import { Link, usePage } from '@inertiajs/inertia-react';
import React from 'react';

export default function Navbar(props) {
   const { auth } = usePage().props;

   return (
      <nav
         className="navbar navbar-expand-lg navbar-dark"
         style={{ backgroundColor: '#0d1117' }}
      >
         <div className="container">
            <a className="navbar-brand" href="#">
               Navbar
            </a>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon" />
            </button>
            <div
               className="collapse navbar-collapse"
               id="navbarSupportedContent"
            >
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                     <Link className="nav-link" href="/">
                        Home
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" href="/dashboard">
                        Dashboard
                     </Link>
                  </li>
               </ul>
               {auth.user !== null ? (
                  <ul className="navbar-nav mb-2 mb-lg-0">
                     <li className="nav-item dropdown">
                        <a
                           className="nav-link dropdown-toggle"
                           href="#"
                           id="navbarDropdown"
                           role="button"
                           data-bs-toggle="dropdown"
                           aria-expanded="false"
                        >
                           {auth.user.name}
                        </a>
                        <ul
                           className="dropdown-menu dropdown-menu-end"
                           aria-labelledby="navbarDropdown"
                        >
                           <li>
                              <a className="dropdown-item" href="#">
                                 Profile
                              </a>
                           </li>
                           <li>
                              <a className="dropdown-item" href="#">
                                 Settings
                              </a>
                           </li>
                           <li>
                              <hr className="dropdown-divider" />
                           </li>
                           <li>
                              <Link
                                 className="dropdown-item"
                                 method="post"
                                 as="button"
                                 href="/logout"
                              >
                                 Logout
                              </Link>
                           </li>
                        </ul>
                     </li>
                  </ul>
               ) : (
                  <ul className="navbar-nav mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link className="nav-link" href="/login">
                           Login
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" href="/register">
                           Register
                        </Link>
                     </li>
                  </ul>
               )}
            </div>
         </div>
      </nav>
   );
}
