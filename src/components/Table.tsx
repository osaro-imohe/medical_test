import React from 'react';
import {
  Table, Thead, Tbody, Tr, Th, Td,
} from 'react-super-responsive-table';
import '../stylesheets/components/Table.css';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

type PatientProp = {
    id: string,
    email: string,
    since: string,
    phone: string,
    address: string,
    lastName: string,
    firstName: string,
}
type setSelectedNameProps = React.Dispatch<React.SetStateAction<string | null>>;
type setSelectedPatientIdProps = React.Dispatch<React.SetStateAction<string | null>>;
type setShowModalProps = React.Dispatch<React.SetStateAction<boolean>>;

const ResponsiveTable = (
  {
    patients,
    setSelectedName,
    setSelectedPatientId,
    setShowModal,
  } : {
      patients: PatientProp[],
      setSelectedName: setSelectedNameProps,
      setSelectedPatientId: setSelectedPatientIdProps,
      setShowModal: setShowModalProps
  },
) => (
  <Table className="table">
    <Thead className="table-thread">
      <Tr>
        <Th>
          <p className="table-header-name">ID</p>
        </Th>
        <Th>
          <p className="table-header">Name</p>
        </Th>
        <Th>
          <p className="table-header">Email</p>
        </Th>
        <Th>
          <p className="table-header">Address</p>
        </Th>
        <Th>
          <p className="table-header">Phone</p>
        </Th>
        <Th>
          <p className="table-header">Since</p>
        </Th>
      </Tr>
    </Thead>
    <Tbody>
      {patients.map((patient: PatientProp) => (
        <Tr
          className="table-row"
          key={patient.id}
          onClick={() => {
            setSelectedPatientId(patient.id);
            setSelectedName(patient.firstName);
            setShowModal(true);
          }}
        >
          <Td>
            <p className="table-text-name">{patient.id}</p>
          </Td>
          <Td>
            <p className="table-text">
              {patient.firstName}
              {' '}
              {patient.lastName}
            </p>
          </Td>
          <Td>
            <p className="table-text">{patient.email}</p>
          </Td>
          <Td>
            <p className="table-text">{patient.address}</p>
          </Td>
          <Td>
            <p className="table-text">{patient.phone}</p>
          </Td>
          <Td>
            <p className="table-text">{new Date(patient.since).toLocaleTimeString()}</p>
            <p className="table-text">{new Date(patient.since).toDateString()}</p>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export default ResponsiveTable;
