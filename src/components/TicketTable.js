// TicketTable.js
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import UserHeader from './UserHeader';
import TicketCard from './TicketCard';
import PriorityRow from './PriorityRow';
import '../App.css'; 

const TicketTable = ({ groupBy, orderBy }) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setApiData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const groupData = () => {
    if (groupBy === 'users') {
      // Group by users
      const groupedByUser = {};
      apiData.tickets.forEach((ticket) => {
        const { userId } = ticket;
        if (!groupedByUser[userId]) {
          groupedByUser[userId] = [];
        }
        groupedByUser[userId].push(ticket);
      });
      return groupedByUser;
    } else if (groupBy === 'status') {
      // Group by status
      const groupedByStatus = {};
      apiData.tickets.forEach((ticket) => {
        const { status } = ticket;
        if (!groupedByStatus[status]) {
          groupedByStatus[status] = [];
        }
        groupedByStatus[status].push(ticket);
      });
      return groupedByStatus;
    } else if (groupBy === 'priority') {
      // Group by priority
      const groupedByPriority = {};
      apiData.tickets.forEach((ticket) => {
        const { priority } = ticket;
        const priorityNumber = parseInt(priority, 10); // Convert priority to number
        if (!groupedByPriority[priorityNumber]) {
          groupedByPriority[priorityNumber] = [];
        }
        groupedByPriority[priorityNumber].push(ticket);
      });
      return groupedByPriority;
    }
    return {};
  };
  

  const sortTickets = (tickets) => {
    if (orderBy === 'priority') {
      return tickets.sort((a, b) => b.priority - a.priority);
    } else if (orderBy === 'title') {
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };

  const groupedData = groupData();

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {groupBy === 'users' ? (
        Object.keys(groupedData).map((userId) => (
          <div key={userId} style={{ marginRight: '20px' }}>
            <UserHeader user={apiData.users.find((user) => user.id === userId)} ticketCount={groupedData[userId].length} />
            {sortTickets(groupedData[userId]).map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))
      ) : groupBy === 'status' ? (
        Object.keys(groupedData).map((status) => (
          <div key={status} style={{ marginRight: '20px' }}>
            
            <div className="status-header">
              
              <p>
                {status} 
                <span className="ticket-count">
                &nbsp;&nbsp;{groupedData[status].length}
                </span>
              </p>

              <div>
                  <FontAwesomeIcon icon={faPlus} color="grey" className="icons" />
                  <FontAwesomeIcon icon={faEllipsisH} color="grey" className="icons" />
              </div>
              
            </div>
            {sortTickets(groupedData[status]).map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))
      ) : groupBy === 'priority' ? (
        Object.keys(groupedData).map((priority) => (
          <PriorityRow key={priority} priority={priority} tickets={sortTickets(groupedData[priority])} ticketCount={groupedData[priority].length} />
        ))
      ) : null}
    </div>
  );
};

export default TicketTable;
