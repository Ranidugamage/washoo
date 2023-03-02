import React, { useState } from 'react';
import { Card, Calendar, TimePicker } from 'react-rainbow-components';

function DateAndTimePicker() {
  const [date, setDate] = useState(new Date('2019-11-11 00:00:00'));
  const [time, setTime] = useState('13:32');

  const calendarContainerStyles = {
    width: '300px',
    height: '300px',
  };

  const containerStyles = {
    maxWidth: '200px',
  };

  const container = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:'3rem'
  };

  return (
    <div>
      <div className='heading-container'>
        <h3>Pickup a date and time to confirm and make your day easier</h3>
      </div>
      <div style={container}>
        <div className="date-picker rainbow-align-content_center rainbow-p-vertical_xx-large rainbow-p-horizontal_medium">
          <Card style={calendarContainerStyles} className="rainbow-p-around_large">
            <Calendar
              id="calendar-3"
              value={date}
              minDate={new Date(2018, 0, 4)}
              maxDate={new Date(2020, 0, 4)}
              onChange={(value) => setDate(value)}
            />
          </Card>
        </div>
        <div className="time-picker rainbow-align-content_center rainbow-p-vertical_xx-large rainbow-p-horizontal_medium">
          <TimePicker
            value={time}
            label="TimePicker Label"
            onChange={(value) => setTime(value)}
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
          />
        </div>
      </div>
    </div>
  );
}

export default DateAndTimePicker;