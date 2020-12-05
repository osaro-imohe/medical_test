import React from 'react';
import '../stylesheets/components/Physician.css';

type Props = {
  id: string | undefined,
  firstName: string | undefined,
  lastName: string | undefined,
  phone: string | undefined,
}

const Physician = ({
  // eslint-disable-next-line no-unused-vars
  firstName, lastName, phone, id,
}: Props) => (
  <div className="physician-container">
    <div className="line" />
    <div className="physician-info">
      <p className="physician-text">{firstName}</p>
      {'  '}
      <p className="physician-text">{lastName}</p>
      {'  '}
      <p className="physician-text"> - </p>
      {'  '}
      <p className="physician-text">{phone}</p>
    </div>
  </div>
);

export default Physician;
