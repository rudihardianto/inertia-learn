import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '../Components/Navbar';

export default function App({ children, title }) {
   return (
      <div>
         <Head title={title} />
         <Navbar />
         <div className="pt-4">{children}</div>
      </div>
   );
}
