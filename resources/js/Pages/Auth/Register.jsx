import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import Guest from '../../Layouts/Guest';

export default function Register() {
   return (
      <>
         <div className="card">
            <div className="card-header">Register</div>
            <div className="card-body">Register form</div>
            <div className="card-footer">
               <Link href="/login" className="link-dark text-decoration-none">
                  Login
               </Link>
            </div>
         </div>
      </>
   );
}

Register.layout = (page) => <Guest children={page} title="Register" />;
