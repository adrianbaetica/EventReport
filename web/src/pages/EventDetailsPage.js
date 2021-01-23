import React from "react";
import {useParams} from 'react-router-dom';

import CustomMap from '../components/CustomMap';
import './EventDetailsPage.css'

const EventDetailsPage = () => {
  
  const {id} = useParams(); //cu id-ul asta poti face get

  // ca props pt CustomMap trebuie pus event-ul sau un obiect cu id, lat, long
  return (
    <div className='event-details-page'>
      
      <CustomMap event ={ {id: {id}, lat: 44.43, long: 26.1}}/>
      <div className='event-info'>
        <div className='event-details'>
          <span><span className='detail-name'>Code:</span> <span className='detail-value'>{`earthquake`}</span></span>
          <span><span className='detail-name'>Tag:</span> <span className='detail-value'>{`Disastrous`}</span></span>
          <span><span className='detail-name'>Description:</span> <span className='detail-value'>{`Bla bla bla`}</span></span>
          <span><span className='detail-name'>Time:</span> <span className='detail-value'>{`${new Date()}`}</span></span>
          <span><span className='detail-name'>Photo:</span></span>
        </div>

        <span className='event-photo'>
          <img src='https://static.scientificamerican.com/sciam/cache/file/7F5C87CE-C719-4650-B4E8AEF44415E806_source.jpg' alt='poza'/>
        </span>
      
      </div>
    </div>
  );
};

export default EventDetailsPage;
