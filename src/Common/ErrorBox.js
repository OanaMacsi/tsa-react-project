import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

class ErrorBox extends Component {
	render () {
		const { showUserError } = this.props

		return (
		<AlertBox showUserError={showUserError}>
			Something went wrong
		</AlertBox>
		)
	}
}

const AlertBox = styled.div`
	display: ${props => props.showUserError ? 'block' : 'none'}
	width: 200px;
	height: 30px;
	position: fixed;
	background: red;
	top: 0;
	right: 0;
	color: white;
`

const mapStateToProps = (state) => {
	return {
		showUserError: state.showUserError
	}
}

export default connect(mapStateToProps, null)(ErrorBox)