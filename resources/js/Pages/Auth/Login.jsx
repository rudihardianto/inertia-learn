import { Link, useForm } from '@inertiajs/inertia-react';
import React from 'react';
import Guest from '../../Layouts/Guest';

export default function Login({ errors }) {
   const { data, setData, post } = useForm({
      email: 'phyllis.cole@example.com',
      password: 'password',
      remember: '',
   });
   const changeHandler = (e) => {
      setData({ ...data, [e.target.id]: e.target.value });
   };
   const submitHandler = (e) => {
      e.preventDefault();
      post(route('login'), data);
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
                        value={data.email}
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
                        value={data.password}
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
                        value={data.remember}
                        onChange={(e) => {
                           setData({ ...data, remember: e.target.checked });
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
               <span className="text-muted">Does't have an account? </span>
               <Link
                  href={route('register')}
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
