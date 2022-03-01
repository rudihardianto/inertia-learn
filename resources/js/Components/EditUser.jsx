import { useForm } from '@inertiajs/inertia-react';
import React, { useEffect } from 'react';
import FormUser from './FormUser';

export default function EditUser({ close, model }) {
   const { data, setData, put, reset, errors } = useForm({
      name: model.name,
      email: model.email,
      username: model.username,
      location: model.location,
      password: model.password,
   });
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
         <FormUser data={data} errors={errors} setData={setData} submit={'Update'} />
      </form>
   );
}
