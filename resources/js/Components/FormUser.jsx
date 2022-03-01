import React from 'react';

export default function FormUser({ errors, data, submit, setData }) {
   const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

   return (
      <>
         <div className="row">
            <div className="col-md-6">
               <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                     Name
                  </label>
                  <input type="text" name="name" value={data.name} onChange={onChange} id="name" className="form-control" />
                  {errors && <div className="text-danger">{errors.name}</div>}
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
                  {errors && <div className="text-danger">{errors.email}</div>}
               </div>
            </div>
            <div className="col-md-6">
               <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                     Username
                  </label>
                  <input type="text" name="username" value={data.username} onChange={onChange} id="username" className="form-control" />
                  {errors && <div className="text-danger">{errors.username}</div>}
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
                  {errors && <div className="text-danger">{errors.location}</div>}
               </div>
            </div>
            <div className="col-md-6">
               <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                     Password
                  </label>
                  <input type="password" name="password" value={data.password} onChange={onChange} id="password" className="form-control" />
                  {errors && <div className="text-danger">{errors.password}</div>}
               </div>
            </div>
         </div>
         <button type="submit" className="btn btn-primary text-right">
            {submit}
         </button>
      </>
   );
}