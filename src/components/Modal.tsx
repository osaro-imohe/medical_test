import React, { useState, useEffect } from 'react';
import '../stylesheets/components/Modal.css';
import axios from 'axios';
import Visit from './Visit';
import Loader from './Loader';

type ModalProps = {
    firstName: string | null,
    patientId: string | null,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
}

type DataProps = {
  diagnosis: string,
  id: string
  location: string,
  patientId: string,
  physicianId: string,
  symptoms: string,
  time: string,
}

const Modal = ({ firstName, patientId, setShowModal } : ModalProps) => {
  const [visits, setVisits] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const loadVisits = async () => {
    setError(false);
    setLoading(true);
    try {
      const { data } = await axios.get(`https://us-central1-ferrum-dev.cloudfunctions.net/api/v1/patients/${patientId}/visits`);
      setVisits([
        ...data,
      ]);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadVisits();
  }, []);
  return (
    <div className="modal">
      <button className="modal-close" type="button" onClick={() => setShowModal(false)}>close</button>
      <div className="modal-header">
        <p className="modal-header-text">
          {`${firstName}'s`}
          {' '}
          visits
        </p>
      </div>
      {loading
        ? <Loader width={80} height={80} center />
        : visits.map((visit) => (
          <Visit
            diagnosis={visit.diagnosis}
            location={visit.location}
            physicianId={visit.physicianId}
            symptoms={visit.symptoms}
            time={visit.time}
            key={visit.id}
          />
        ))}
      {error ? <p className="error-message">Looks like something went wrong, try again.</p> : null}
    </div>
  );
};

export default Modal;
