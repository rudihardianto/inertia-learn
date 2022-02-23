import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '../Components/Navbar';

export default function App({ children, title }) {
   return (
      <div>
         <Head title={title} />
         <Navbar />
         {children}
      </div>
   );
}
