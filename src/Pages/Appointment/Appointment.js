import React from 'react';
import NavLink from "../../Components/Link/Link";
import './Appointment.scss';

class Appointment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            existingAppointments: {
                "1": false,
                "2": false,
                "3": false,
                "4": false,
                "5": false,
                "6": false,
                "7": false,
                "8": false
            },
            userData: {}
        }
    }

    componentDidMount = () => {
        var data = JSON.parse(localStorage.getItem("Appointment") || '[]');

        this.setState({
            existingAppointments: data,
            userData: data
        });
        console.log(data);

        for(var i = 0; i < data.length; i++){
            console.log(data[i])
            if(data[i] && data[i].id){
                console.log(data[i].id);
                var id = data[i].id;

                var obj = this.state.existingAppointments;
                obj[id] = true;
                this.setState({existingAppointments: obj});
            }
        }
    }

    render () {
        console.log(this.state.existingAppointments, this.state.userData);
        return (
            <div className="AppointmentMain">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" align="center">
                            <div className="SchedulerBox card mt-5">
                                <h3 className="text-center mt-3">Schedule Appointment</h3>

                                <div class="row scale ml-3 p-1">
                                    <span className="square sq1"></span>
                                    <span className="scale-text">Vacant</span>

                                    <span className="square sq2 ml-3"></span>
                                    <span className="scale-text">Booked</span>
                                </div>

                                <div className="SchedulerInputs pb-4">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" align="center">
                                            <NavLink link={{pathname: "/AppointmentDetails", appointment: {id: 1, time: "9:00 AM - 10:00 AM", userData: this.state.userData} }}>
                                                <input type="button" className={"btn btn-primary" + (this.state.existingAppointments["1"] ? " booked" : null)} value="9:00 AM - 10:00 AM" />
                                            </NavLink>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" align="center">
                                            <NavLink link={{pathname: "/AppointmentDetails", appointment: {id: 1, time: "10:00 AM - 11:00 AM", userData: this.state.userData} }}>
                                                <input type="button" className={"btn btn-primary" + (this.state.existingAppointments["2"] ? " booked" : null)} value="10:00 AM - 11:00 AM" />
                                            </NavLink>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" align="center">
                                            <NavLink link={{pathname: "/AppointmentDetails", appointment:{id: 3, time: "11:00 AM - 12:00 PM", userData: this.state.userData} }}>
                                                <input type="button" className={"btn btn-primary" + (this.state.existingAppointments["3"] ? " booked" : null)} value="11:00 AM - 12:00 PM" />
                                            </NavLink>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" align="center">
                                            <NavLink link={{pathname: "/AppointmentDetails", appointment: {id: 4, time: "12:00 PM - 1:00 PM", userData: this.state.userData} }}>
                                                <input type="button" className={"btn btn-primary" + (this.state.existingAppointments["4"] ? " booked" : null)} value="12:00 PM - 1:00 PM" />
                                            </NavLink>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" align="center">
                                            <NavLink link={{pathname: "/AppointmentDetails", appointment: {id: 5, time: "1:00 PM - 2:00 PM", userData: this.state.userData} }}>
                                                <input type="button" className={"btn btn-primary" + (this.state.existingAppointments["5"] ? " booked" : null)} value="1:00 PM - 2:00 PM" />
                                            </NavLink>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" align="center">
                                            <NavLink link={{pathname: "/AppointmentDetails", appointment: {id: 6, time: "2:00 PM - 3:00 PM", userData: this.state.userData} }}>
                                                <input type="button" className={"btn btn-primary" + (this.state.existingAppointments["6"] ? " booked" : null)} value="2:00 PM - 3:00 PM" />
                                            </NavLink>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" align="center">
                                            <NavLink link={{pathname: "/AppointmentDetails", appointment: {id: 7, time: "3:00 PM - 4:00 PM", userData: this.state.userData} }}>
                                                <input type="button" className={"btn btn-primary" + (this.state.existingAppointments["7"] ? " booked" : null)} value="3:00 PM - 4:00 PM" />
                                            </NavLink>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" align="center">
                                            <NavLink link={{pathname: "/AppointmentDetails", appointment: {id: 8, time: "4:00 PM - 5:00 PM", userData: this.state.userData} }}>
                                                <input type="button" className={"btn btn-primary" + (this.state.existingAppointments[8] ? " booked" : null)} value="4:00 PM - 5:00 PM" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Appointment