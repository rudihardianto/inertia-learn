import { useForm } from '@inertiajs/inertia-react';
import React, { useEffect } from 'react';

export default function EditUser({ close, model }) {
   const { data, setData, put, reset } = useForm({
      name: model.name,
      email: model.email,
      username: model.username,
      location: model.location,
      password: model.password,
   });
   const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });
   const onSubmit = (e) => {
      e.preventDefault();
      put(route('users.update', model.id), {
         data,
         onSuccess: () => {
            reset(), close();
         },
      });
   };

   useEffect(() => {
      setData({
         ...data,
         name: model.name,
         email: model.email,
         username: model.username,
         location: model.location,
         password: model.password,
      });
   }, [model]);

   return (
      <form onSubmit={onSubmit}>
         <div className="row">
            <div className="col-md-6">
               <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                     Name
                  </label>
                  <input type="text" name="name" value={data.name} onChange={onChange} id="name" className="form-control" />
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-6">
               <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                     Email
                  </label>
                  <input type="text" name="email" value={data.email} onChange={onChange} id="email" className="form-control" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                     Username
                  </label>
                  <input type="text" name="username" value={data.username} onChange={onChange} id="username" className="form-control" />
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-6">
               <div className="mb-3">
                  <label htmlFor="location" className="form-label">
                     Location
                  </label>
                  <input type="text" name="location" value={data.location} onChange={onChange} id="location" className="form-control" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                     Password
                  </label>
                  <input type="password" name="password" value={data.password} onChange={onChange} id="password" className="form-control" />
               </div>
            </div>
         </div>
         <button type="submit" className="btn btn-primary text-right">
            Update
         </button>
      </form>
   );
}
