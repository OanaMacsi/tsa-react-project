import React, { Component } from 'react';
import { FormField } from '../Common/Form/FormFields'
import { connect } from 'react-redux'
import { editUser, patchUser } from './userActions'

class EditUserProfile extends Component {
	constructor() {
		super()
		this.state = {
			loadComplete: false,
			form: {}
		}
	}

	componentDidMount() {
		console.log(this.props)

		this.setState({
			loadComplete: true,
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
		const { editUser } = this.props
		e.preventDefault()
		editUser(this.state.form)
	}

  render() {
	  const { loadComplete } = this.state
	  const { firstName, lastName, email, phone } = this.state.form
    return (
      <div className="co-form">
		{
			loadComplete && <form onSubmit={this.submit}>
				<FormField labelName='Prenume' name='firstName' tagName='first-Name' value={firstName} onChange={this.onChange} />
				<FormField labelName='Nume' name='lastName' tagName='last-Name' value={lastName} onChange={this.onChange} />
				<FormField labelName='Email' name='email' tagName='email' value={email} onChange={this.onChange} />
				<FormField labelName='Telefon' name='phone' tagName='phone' value={phone} onChange={this.onChange} />
				<input type='submit' value='Salveaza' />
			</form>
		}
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		userData: state.userData
	}
}

const actions = {
	editUser,
	patchUser
}

export default connect(mapStateToProps, actions)(EditUserProfile);
