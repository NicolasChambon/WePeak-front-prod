import { useState, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import { fetchActivitiesFromCityWithDates } from '../../../../actions/activityActions';

import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ lastSearchedCity }) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start && end) {
      const formatedStartDate = {
        label: 'startDate',
        value: formatDate(start),
      };
      const formatedEndDate = {
        label: 'endDate',
        value: formatDate(end),
      };

      dispatch(
        fetchActivitiesFromCityWithDates(
          lastSearchedCity,
          formatedStartDate,
          formatedEndDate
        )
      );
    }
  };

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      type="button"
      className="FilterButton-button"
      onClick={onClick}
      ref={ref}
    >
      {value === '' ? 'Selectionner une date' : value}
    </button>
  ));

  ExampleCustomInput.displayName = 'ExampleCustomInput';

  ExampleCustomInput.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      onChange={onChange}
      customInput={<ExampleCustomInput />}
      startDate={startDate}
      endDate={endDate}
      selectsRange
    />
  );
};

export default Calendar;
