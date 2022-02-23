import React from 'react';
import App from '../Layouts/App';

export default function Home(props) {
   return (
      <>
         <div className="container">
            <div className="card">
               <div className="card-header">{props.username}</div>
               <div className="card-body">
                  Hallo, nama saya {props.username}
               </div>
            </div>
         </div>
      </>
   );
}

Home.layout = (page) => <App children={page} title="Home" />;
