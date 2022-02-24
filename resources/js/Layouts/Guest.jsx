import React from 'react';
import { Head, Link } from '@inertiajs/inertia-react';

export default function App({ children, title }) {
   return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
         <Head title={`${title} | Learn Inertia`} />
         <div className="col-md-4">{children}</div>
      </div>
   );
}
