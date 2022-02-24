import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import Guest from '../../Layouts/Guest';

export default function Login({ errors }) {
   const [values, setValues] = useState({
      email: '',
      password: '',
      remember: '',
   });

   const changeHandler = (e) => {
      setValues({ ...values, [e.target.id]: e.target.value });
   };

   const submitHandler = (e) => {
      e.preventDefault();
      Inertia.post('/login', values);
      console.log(errors);
   };

   return (
      <>
         <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
               <form onSubmit={submitHandler} noValidate>
                  {/* email */}
                  <div className="mb-3">
                     <label htmlFor="email" className="form-label">
                        Email
                     </label>
                     <input
                        value={values.email}
                        onChange={changeHandler}
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                     />
                     {errors && (
                        <div className="text-danger text-sm">
                           {errors.email}
                        </div>
                     )}
                  </div>

                  {/* password */}
                  <div className="mb-3">
                     <label htmlFor="password" className="form-label">
                        Password
                     </label>
                     <input
                        value={values.password}
                        onChange={changeHandler}
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                     />
                     {errors && (
                        <div className="text-danger text-sm">
                           {errors.password}
                        </div>
                     )}
                  </div>

                  {/* remember me */}
                  <div className="form-check">
                     <input
                        value={values.email}
                        onChange={(e) => {
                           setValues({ ...values, remember: e.target.checked });
                        }}
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                        id="remember"
                     />
                     <label className="form-check-label" htmlFor="remember">
                        Remember me
                     </label>
                  </div>

                  {/* button */}
                  <button type="submit" className="btn btn-primary mt-3">
                     Login
                  </button>
               </form>
            </div>
            <div className="card-footer">
               <Link
                  href="/register"
                  className="link-dark text-decoration-none"
               >
                  Register
               </Link>
            </div>
         </div>
      </>
   );
}

Login.layout = (page) => <Guest children={page} title="Login" />;
