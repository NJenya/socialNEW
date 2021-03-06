import React from 'react'

class ProfileStatus extends React.Component {

	state = {
		editMode: false,
		status: this.props.status
	}
	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateStatus(this.state.status)
	}

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		})
	}

	render() {
		return <div>
			<div>
				{!this.state.editMode &&
					<div>
						<span onClick={this.activateEditMode}>{this.props.status}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input
							autoFocus={true}
							onChange={this.onStatusChange}
							value={this.state.status}
							onBlur={this.deactivateEditMode}
						/>
					</div>
				}
			</div>
		</div>
	}
}

export default ProfileStatus;
