import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function formatName(user){
//   return user.firstName + ' ' + user.lastName;
// }
// const user = {
//   firstName: 'Hendra',
//   lastName: 'Nicholas'
// };
// const element = (
//   <h1> 
//   Berca
//   </h1>
// );

function Welcome(props){
  return <h1> Hello, {props.name} </h1>
}
function Name(){
  return (
    <div>
      <Welcome name="Hendra"/>
      <Welcome name="Nicholas"/>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Name/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
