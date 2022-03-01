import { useForm } from '@inertiajs/inertia-react';
import React from 'react';
import FormUser from './FormUser';

export default function CreateUser({ close }) {
   const { data, setData, post, reset, errors } = useForm({
      name: '',
      email: '',
      username: '',
      location: '',
      password: '',
   });
   const onSubmit = (e) => {
      e.preventDefault();
      post(route('users.store'), {
         data,
         onSuccess: () => {
            reset(), close();
         },
      });
   };

   return (
      <form onSubmit={onSubmit}>
         {/* <FormUser data={data} errors={errors} setData={setData} submit={'Update'} /> */}
         <FormUser {...{ errors, data, setData, submit: 'Save' }} />
      </form>
   );
}
