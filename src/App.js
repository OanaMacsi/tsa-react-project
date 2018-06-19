import React, { Component } from 'react';
import { FormField } from './Common/Form/FormFields'
import './App.css';

class App extends Component {
	constructor () {
		super()
		this.state = {
			form: {
				firstName: 'Test',
				lastName: 'Academy',
				email: 'academy@thinslices.com',
				phone: '074123456'
			}
		}
	}

	onChange = (stateAttribute) => (event) => {
		let newFormState = this.state.form
		newFormState[stateAttribute] = event.target.value
		this.setState({
			form: newFormState
		})
	}

  render() {
	  const { firstName, lastName, email, phone } = this.state.form
    return (
      <div className="co-form">
		<form>
			<FormField labelName='Prenume' name='firstName' tagName='first-Name' value={firstName} onChange={this.onChange} />
			<FormField labelName='Nume' name='lastName' tagName='last-Name' value={lastName} onChange={this.onChange} />
			<FormField labelName='Email' name='email' tagName='email' value={email} onChange={this.onChange} />
			<FormField labelName='Telefon' name='phone' tagName='phone' value={phone} onChange={this.onChange} />
		</form>
      </div>
    );
  }
}

export default App;
