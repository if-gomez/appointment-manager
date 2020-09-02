import React, { Fragment,useState } from "react";
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types'


const Form = ({createAppointment}) => {
    //Creating state
    const [appointment, updateAppointment] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, updateError] = useState(false);

    //handleChange
    const handleChange = e => {
        updateAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }

    //Extracting values
    const { mascota, propietario, fecha, hora, sintomas } = appointment;

    //Submitting object
    const submitAppointment = e => {
        e.preventDefault();
        if(mascota.trim() === '' ||
        propietario.trim() === '' ||
        fecha.trim() === '' ||
        hora.trim() === '' ||
        sintomas.trim() === ''
        ){
            updateError(true)
            return
        }

        //Asign ID
        appointment.id = uuid();
        
        //check errors
        updateError(false);

        //save
        createAppointment(appointment);

        //clean
        updateAppointment({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    }


    return( 
        <Fragment>
            <h2 className="text-center">Crear Cita</h2>
            
            <form
                className="animate__fadeInLeft"
                onSubmit={submitAppointment}
            >
                <div 
                className="form-group">
                    <label>Nombre mascota</label>
                    <input
                        type="text"
                        name="mascota"
                        className="form-control"
                        placeholder="Nombre Mascota"
                        onChange={handleChange}
                        value={mascota}
                    />
                </div>
                <div className="form-group">
                <label>Nombre dueño</label>
                    <input
                        type="text"
                        name="propietario"
                        className="form-control"
                        placeholder="Nombre dueño de la mascota"
                        onChange={handleChange}
                        value={propietario}
                    />
                </div>
                <div className="form-group">
                    <label>Fecha</label>
                    <input
                        type="date"
                        name="fecha"
                        className="form-control"
                        onChange={handleChange}
                        value={fecha}
                    />
                </div>
                <div className="form-group">
                    <label>Hora</label>
                    <input
                        type="time"
                        name="hora"
                        className="form-control"
                        onChange={handleChange}
                        value={hora}
                    />
                </div>
                <div className="form-group">
                    <label>Sintomas</label>
                    <textarea 
                        className="form-control"
                        name="sintomas"
                        onChange={handleChange}
                        value={sintomas}
                    ></textarea>
                </div>
                
                {error ? <p className="alert alert-danger">Todos los campos son obligatorios</p> : null}

                <button
                    type="submit"
                    className="btn btn-primary"
                    onChange={handleChange}
                >Agregar cita</button>
            </form>
        </Fragment>
    );
}

Form.propTypes = {
    createAppointment: PropTypes.func.isRequired
}

export default Form;