import React, { Component } from 'react';
import { FormField, SelectField } from '../Common/Form/FormFields'
import { connect } from 'react-redux'
import { editUser } from './userActions'
import { Button } from '../Common/CommonStyledComponents'
import styled from 'styled-components'

class EditUserProfile extends Component {
	constructor() {
		super()
		this.state = {
			loadComplete: false,
			form: {}
		}
	}

	componentDidMount() {
		this.setState({
			loadComplete: true,
			form: this.props.userData
		})
	}

	onChange = (stateAttribute) => (event) => {
		let newFormState = {
			...this.state.form
		}

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

	cancelEvent = () => {
		console.log('s-a razandit')
	}

  render() {
	  const { loadComplete } = this.state
	  const { firstName, lastName, email, phone } = this.state.form
    return (
      <FormContainer>
		{
			loadComplete && <form onSubmit={this.submit}>
				<SelectField options={['value1', 'value2', 'value3']} />
				<FormField labelName='Prenume' name='firstName' tagName='first-Name' value={firstName} onChange={this.onChange} />
				<FormField labelName='Nume' name='lastName' tagName='last-Name' value={lastName} onChange={this.onChange} />
				<FormField labelName='Email' name='email' tagName='email' value={email} onChange={this.onChange} />
				<FormField labelName='Telefon' name='phone' tagName='phone' value={phone} onChange={this.onChange} />
				<input type='submit' value='Salveaza' />
				<Button onClick={this.cancelEvent}>Renunta</Button>
			</form>
		}
      </FormContainer>
    );
  }
}

export const FormContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	color: ${props => props.makeItPink ? 'pink' : 'black'};
`

const mapStateToProps = state => {
	return {
		userData: state.userData
	}
}

const actions = {
	editUser
}

export default connect(mapStateToProps, actions)(EditUserProfile);
