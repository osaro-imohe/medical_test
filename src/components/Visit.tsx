/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import '../stylesheets/components/Visit.css';
import axios from 'axios';
import Physician from './Physician';
import Loader from './Loader';

type DataProps = {
  diagnosis: string,
  location: string,
  physicianId: string,
  symptoms: string,
  time: string,
}

type PhysicianProp = {
  id: string,
  phone: string,
  lastName: string,
  firstName: string,
}

const Visit = ({
  diagnosis, location, physicianId, symptoms, time,
}: DataProps) => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPhysician, setShowPhysician] = useState<boolean>(false);
  const [info, setInfo] = useState<PhysicianProp | null>(null);

  const loadPhysicianInfo = async () => {
    setError(false);
    if (!info) {
      setLoading(true);
      try {
        const { data } = await axios.get(`https://us-central1-ferrum-dev.cloudfunctions.net/api/v1/physicians/${physicianId}`);
        setInfo(data);
        setShowPhysician(true);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    }
  };

  return (
    <>
      <div className="visit" onClick={loadPhysicianInfo}>
        <div className="visit-inner">
          <div className="visit-tab-date">
            <p className="visit-time">{new Date(time).toLocaleTimeString()}</p>
            <p className="visit-date">{new Date(time).toDateString()}</p>
          </div>
          <div className="visit-tab-options">
            <p className="visit-categories">{symptoms}</p>
            <p className="visit-diagnosis">{diagnosis}</p>
            <p className="visit-location">{location}</p>
          </div>
          <div className="visit-arrow-container">
            {loading ? <Loader width={10} height={10} center={false} /> : null}
          </div>
        </div>
        {showPhysician ? (
          <Physician
            id={info?.id}
            phone={info?.phone}
            firstName={info?.firstName}
            lastName={info?.lastName}
          />
        ) : null}
        {error ? <p className="error-message-visit">Looks like something went wrong, try again.</p> : null}
      </div>
    </>
  );
};

export default Visit;
