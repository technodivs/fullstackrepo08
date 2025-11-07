function Car2(){
    return(
        <>
        <h2>this is componenet example</h2> '
        <button> click me </button> 
        </>
    );
} export default Car2;
import Car2 from './Car2';
import reactlogo from './reactlogo.png';
import './App.css'
import viteicon from '/viteicon.png';
import vitelogo from '/vite.svg';
import Car from './Car';
import React from 'react';


function Vs(){
    const[count, setCount]=React.useState(0);
    return(
        <>
        <h1> this is vs component</h1>
        <Car />
        <Car2 />
        </>
    );
}export default Vs;
