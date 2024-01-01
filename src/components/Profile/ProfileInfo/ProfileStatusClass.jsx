
import React from "react";
import classes from "./ProfileInfo.module.css";

//Просто, чтобы было понимание отличия классовой и функциональной компоненты в данном примере
class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => { this.setState({ editMode: true }) }

    deActivateEditMode = () => {
         this.setState({ editMode: false }) ;
         this.props.updateStatus(this.state.status)
        }

        onStatusChange = (e) => {
            this.setState({status: e.currentTarget.value})
        }

        componentDidUpdate(prevProps, prevState) {
            if(prevProps.status !== this.props.status) {
                this.setState({
                    status: this.props.status
                })
            }
            console.log(prevProps, prevState)
        }

    render() {
        return (
            <div>

                {
                    this.state.editMode
                        ? <div className={classes.userInfo}><input className={classes.statusInput} onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={this.deActivateEditMode} /></div>
                        : <div className={classes.userInfo}><p onDoubleClick={this.activateEditMode} className={classes.status}>{this.props.status || "No status"}</p>
                        </div>
                }

            </div>
        )
    }
};

export default ProfileStatus;