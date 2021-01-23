import React from "react";
import {useParams} from 'react-router-dom';

const EventDetailsPage = () => {
  const {id} = useParams();
  return <div>Event {id} details</div>;
};

export default EventDetailsPage;
