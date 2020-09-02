import React, { Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';


function App() {

  let appointmentInit = JSON.parse(localStorage.getItem('appointments'))
  if(!appointmentInit) {
    appointmentInit = [];
  }


  //Citas array
  const [appointments, saveAppointments] = useState(appointmentInit);

  useEffect(() => {
    if(appointmentInit){
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else { 
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments, appointmentInit])

  const createAppointment = appointment => {
    saveAppointments([
      ...appointments,
      appointment
    ])
  }

  const deleteAppointment = id => {
    const newAppointments = appointments.filter(appointment => ( appointment.id !== id ));
    saveAppointments(newAppointments);
  }

  const title = appointments.length === 0 ? 'No hay citas' : 'Administra tus citas'

  
  return (
    <Fragment>
      <h1 className='text-center mt-3'>Administrador de pacientes</h1>

      <div className="container"> 
        <div className="row">
          <div className="col-4 mt-5">
            <Form
              createAppointment={createAppointment}
            />
          </div>
          <div className="col-6 mx-auto mt-5">
            <h2 className="text-center">{title}</h2>
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}



export default App;