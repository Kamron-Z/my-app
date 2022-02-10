import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    onEditStatus = () => {
        this.setState({
            editMode: true
        })
    }

    deonEditStatus = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.onEditStatus}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deonEditStatus} type="text" value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus