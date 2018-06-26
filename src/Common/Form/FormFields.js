import React, { Component } from 'react'

export class FormField extends Component {
	render () {
		const { labelName, name, tagName, onChange, value } = this.props
		return <div>
			<label htmlFor={ tagName }>{ labelName }</label>
			<input type='text' name={ tagName } value={value} onChange={onChange(name)} />
		</div>
	}
}

export class SelectField extends Component {

	renderSelectOptions(selectOptions) {
		return selectOptions.map((option, i) => (<option key={option + i}>{option}</option>))
	}

	render () {
		const {options} = this.props
		return <select>
			{this.renderSelectOptions(options)}
		</select>
	}
}