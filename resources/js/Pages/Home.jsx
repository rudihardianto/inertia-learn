import React from 'react';
import App from '../Layouts/App';

export default function Home(props) {
   return (
      <App title="Home">
         <h1>Hallo, nama saya {props.username}</h1>
         My Pages <br />
      </App>
   );
}
