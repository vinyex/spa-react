import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
	        <label>
  				<FontAwesomeIcon
    				icon="envelope"
    				color="white"
    				
  								/>
  				{' '}My Email : irvinepramudya@gmail.com
			</label>
			<br/>
			<label>
  				<FontAwesomeIcon
    				icon="key"
    				color="white"
    				
  								/>
  				{' '}My Github : Github.com/vinyex
			</label>
      </div>
    );
  }
}
 
export default Contact;