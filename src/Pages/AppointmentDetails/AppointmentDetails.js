import React from 'react';
import NavLink from "../../Components/Link/Link";
import './AppointmentDetails.scss';

class AppointmentDetails extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.location);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNo: '',
            appointment: this.props.location.appointment,

            edit: false
        }
    }

    componentDidMount = () => {
        if(this.state.appointment && this.state.appointment.userData){
            var arr = this.state.appointment.userData;
            var value1 = this.state.appointment.time;

            for (let i = 0; i < arr.length; i++){
                if(arr[i].time === value1){
                    var firstName = arr[i].firstName;
                    var lastName = arr[i].lastName;

                    var phoneNo = arr[i].phoneNo;

                    console.log('Hello', {firstName, lastName, phoneNo})

                    this.setState({
                        firstName: firstName,
                        lastName: lastName,
                        phoneNo: phoneNo,
                        appointment: this.props.location.appointment,

                        edit: true
                    });
                }
            }
        }
    }

    componentWillUnmount = () => {
        this.setState({
            firstName: '',
            lastName: '',
            phoneNo: ''
        });
    }

    handleAlphabet = (e, input) => {
        var value = e.target.value;

        let regex = /^[A-Z]+$/i;

        var boolean = regex.test(value);

        if(input === 'firstName'){
            if(value){
                if(boolean){
                    this.setState({firstName: value});
                }else{
                    alert("Only alphabets are allowed.");
                }
            }else{
                this.setState({firstName: value});
            }
        }else if(input === 'lastName'){
            if(value){
                if(boolean){
                    this.setState({lastName: value});
                }else{
                    alert("Only alphabets are allowed.");
                }
            }else{
                this.setState({lastName: value});
            }
        }
    }

    handleNumeric =(e, input) => {
        var value = e.target.value;
        let regex = /^[0-9]*$/;

        var boolean = regex.test(value);

        if(input === 'phoneNo'){
            if(value){
                if(boolean){
                    this.setState({phoneNo: value});
                }else{
                    alert("Only numbers are allowed.");
                }
            }else{
                this.setState({phoneNo: value});
            }
        }
    }

    handleSubmit = () => {
        var edit = this.state.edit;

        if(!edit){
            var firstName = this.state.firstName;
            var lastName = this.state.lastName;
            var phoneNo = this.state.phoneNo;

            var dataObject = {};
            dataObject.firstName = firstName;
            dataObject.lastName = lastName;
            dataObject.phoneNo = phoneNo;
            dataObject.time = this.state.appointment.time;
            dataObject.id = this.state.appointment.id;

            console.log(dataObject);

            var arr = [dataObject];
            console.log(arr)

            var localAppointment = JSON.parse(localStorage.getItem("Appointment") || '[]');
            console.log(localAppointment);

            if(localAppointment && localAppointment.length){
                arr = [...arr, ...localAppointment];
            }

            localStorage.setItem("Appointment", JSON.stringify(arr));

            console.log( JSON.parse(localStorage.getItem("Appointment") || '[]') );

            window.location.href = `${window.location.origin}/`;
        }else{
            var appointment = this.props.location.appointment;
            var userData = JSON.parse(localStorage.getItem("Appointment") || '[]');
            
            var finalArr = [];

            for(let i=0; i<userData.length; i++){
                console.log(appointment.id, userData[i].id)
                if(appointment.id === userData[i].id){

                    var firstName = this.state.firstName;
                    var lastName = this.state.lastName;
                    var phoneNo = this.state.phoneNo;

                    userData[i].firstName = firstName;
                    userData[i].lastName = lastName;
                    userData[i].phoneNo = phoneNo;
                    userData[i].time = this.state.appointment.time;
                    userData[i].id = this.state.appointment.id;

                    finalArr.push(userData[i]);
                }else{
                    finalArr.push(userData[i]);
                }
            }
            localStorage.setItem("Appointment", JSON.stringify(finalArr));

            window.location.href = `${window.location.origin}/`;
        }
    }

    render () {
        return (
            <div className="AppointmentDetailsMain">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" align="center">
                            <form className="AppointmentForm w-50">
                                <h3 className="text-left mb-4">Book Appointment for {this.state.appointment ? this.state.appointment.time : ''}:</h3>
                                <div className="form-group">
                                    <label htmlFor="">First Name</label>
                                    <input type="text" className="form-control" onChange={(event) => this.handleAlphabet(event, 'firstName')} value={this.state.firstName ? this.state.firstName : ''} placeholder="Enter First Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" className="form-control" onChange={(event) => this.handleAlphabet(event, 'lastName')} value={this.state.lastName ? this.state.lastName : ''} placeholder="Enter Last Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Phone No.</label>
                                    <input type="tel" className="form-control" onChange={(event) => this.handleNumeric(event, 'phoneNo')} value={this.state.phoneNo ? this.state.phoneNo : ''} placeholder="Enter Phone No." maxLength={10} />
                                </div>
                                <NavLink link="/">
                                    <button type="cancel" className="btn btn-secondary float-left" id="" name="cancel">Cancel</button>
                                </NavLink>
                                <button type="button" className="btn btn-primary float-right" onClick={this.handleSubmit} disabled={this.state.firstName && this.state.lastName && this.state.phoneNo ? false : true}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppointmentDetails