import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// creating a function with props as used in js can't be use because it doesn't follow the structure 
// const ReactElement={
//     type :'a',
//     props: {
//         href : 'https://google.com',
//         target : '_blank'

//     },
//     Children :'Click me to visit Gooogle'
// }

const reactElement= React.createElement(
    'a',
    {href : 'https://google.com',
        target : '_blank'},
        'click me to visit google '
    
)
//const ReactElement=React.createElement
//to create react element we can do similar technique as cretimg js object

createRoot(document.getElementById('root')).render(

   <App />
    // reactElement 
    //the app function redered as the element of the web
  
)
