import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appointment, deleteAppointment}) => (
    <div className="card p-2">
        <p className="card-text"><b>Mascota:</b> {appointment.mascota}</p>
        <p className="card-text"><b>Propietario:</b> {appointment.propietario}</p>
        <p className="card-text"><b>Fecha:</b> {appointment.fecha}</p>
        <p className="card-text"><b>Hora:</b> {appointment.hora}</p>
        <p className="card-text"><b>Sintomas:</b> {appointment.sintomas}</p>

        <button
            className="btn btn-danger m-2"
            onClick={() => deleteAppointment(appointment.id)}
        >Eliminar &times;</button>
    </div>
)

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}

export default Appointment
