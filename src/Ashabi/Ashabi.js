import React from 'react';
//import styled from 'styled-components'
//import './Ashabi.css';
import classing from './Ashabi.css';

/*const StyledDiv = styled.div`
          width: 60%;
	      margin:16px auto;
	      border: 1px solid #eee;
	      box-shadow: 0 2px 3px #ccc;
	      padding: 16px;
	      text-align: center;

          @media (min-width: 500px) {
		     width: 450px;
	      }
  `;
  */
const ashabi= (props) => {
	return (
		//<div className="Ashabi"> 
		<div className={classing.Ashabi}> 

		   <p onClick={props.click}> I am {props.name} and I am {props.age} years old </p>
		   <h2>{props.children}</h2>
		   <input type="text" onChange={props.changed} value={props.name} />
		</div>		    
    )
};

export default ashabi;
