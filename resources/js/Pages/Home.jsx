import React from 'react';
import App from '../Layouts/App';

export default function Home(props) {
   return (
      <>
         <div className="container">
            <div className="card">
               <div className="card-body">
                  Learn Laravel with <strong>Inertia</strong> and
                  <strong> React.js</strong>
               </div>
            </div>
         </div>
      </>
   );
}

Home.layout = (page) => <App children={page} title="Home" />;
