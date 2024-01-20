// StatusRow.js
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css'; // Import your App.css file

const StatusRow = ({ status, tickets, ticketCount }) => {
  return (
    <div className="status-row ">
      <p>{status} <span className="ticket-count">{ticketCount}</span></p>
      {tickets.map((ticket) => (
        <p key={ticket.id}>{ticket.title}</p>
      ))}
    </div>
  );
};

StatusRow.propTypes = {
  status: PropTypes.string.isRequired,
  tickets: PropTypes.array.isRequired,
  ticketCount: PropTypes.number.isRequired,
};

export default StatusRow;
