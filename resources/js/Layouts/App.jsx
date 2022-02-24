import React from 'react';
import { Head, usePage } from '@inertiajs/inertia-react';
import Navbar from '../Components/Navbar';

export default function App({ children, title }) {
   const { flash } = usePage().props;
   return (
      <div>
         <Head title={title} />
         <Navbar />
         <div className="pt-4">
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     {flash.message && (
                        <div className="alert alert-success">
                           {flash.message}
                        </div>
                     )}
                  </div>
               </div>
            </div>
            {children}
         </div>
      </div>
   );
}
