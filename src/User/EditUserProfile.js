import React, { Component } from 'react';
import { FormField } from '../Common/Form/FormFields'
import { connect } from 'react-redux'

class EditUserProfile extends Component {
	constructor () {
		super()
		this.state = {
			form: {}
		}
	}

	componentDidMount() {
		this.setState({
			form: this.props.userData
		})
	}

	onChange = (stateAttribute) => (event) => {
		let newFormState = this.state.form
		newFormState[stateAttribute] = event.target.value
		this.setState({
			form: newFormState
		})
	}

	submit = (e) => {
		e.preventDefault()
		console.log('saving data')
		this.props.dispatch({
			type: 'EDIT_USER',
			newUserData: this.state.form
		})
	}

  render() {
	  const { firstName, lastName, email, phone } = this.state.form
    return (
      <div className="co-form">
		<form onSubmit={this.submit}>
			<FormField labelName='Prenume' name='firstName' tagName='first-Name' value={firstName} onChange={this.onChange} />
			<FormField labelName='Nume' name='lastName' tagName='last-Name' value={lastName} onChange={this.onChange} />
			<FormField labelName='Email' name='email' tagName='email' value={email} onChange={this.onChange} />
			<FormField labelName='Telefon' name='phone' tagName='phone' value={phone} onChange={this.onChange} />
			<input type='submit' value='Salveaza' />
		</form>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		userData: state
	}
}

export default connect(mapStateToProps, null)(EditUserProfile);
