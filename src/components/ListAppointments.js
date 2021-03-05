import React, {Component } from "react";
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class ListAppointments extends Component {
    render() {
        const listItems = this.props.appointments.map(item => (
            <div key={item.aptId}>
              <button 
                onClick={()=>this.props.deleteAppointment(item)}>
                  <FaTimes />
              </button>
              <div>{item.aptId} -- {item.petName}</div>
              <div>{item.ownerName}</div>
              <Moment 
                date={item.aptDate}
                parse="YYYY-MM-dd hh:mm"
                format="MMM-D h:mma"
              />
            </div>
          ));

        return <div>{listItems}</div>;
    }
}

export default ListAppointments;
