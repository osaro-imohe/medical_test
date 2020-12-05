/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import '../stylesheets/pages/Home.css';
import axios from 'axios';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import ResponsiveTable from '../components/Table';

type PatientProps = {
    id: string,
    email: string,
    since: string,
    phone: string,
    address: string,
    lastName: string,
    firstName: string,
}

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [patients, setPatients] = useState<PatientProps[]>([]);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [selectedPatientId, setSelectedPatientId] = useState<string|null>(null);

  const fetchData = async () => {
    const res = await axios.get('https://us-central1-ferrum-dev.cloudfunctions.net/api/v1/patients');
    setPatients([
      ...res.data,
    ]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home-container">
      <div className="header">
        <p className="header-text">🏥</p>
      </div>
      {loading ? (
        <Loader width={80} height={80} center />
      ) : (
        <>
          <div className="patient-container">
            {/* <p>Manage hospital visits</p> */}
            {/*
            <div className="patient-container-banner"
            style={{ backgroundImage: `url(${HomeImage})` }}
            /> */}
            <p className="patient-container-text">Patients</p>
            <ResponsiveTable
              patients={patients}
              setSelectedName={setSelectedName}
              setSelectedPatientId={setSelectedPatientId}
              setShowModal={setShowModal}
            />
          </div>
          {showModal
            ? (
              <Modal
                firstName={selectedName}
                patientId={selectedPatientId}
                setShowModal={setShowModal}
              />
            ) : null}
        </>
      )}
    </div>
  );
};

export default Home;
