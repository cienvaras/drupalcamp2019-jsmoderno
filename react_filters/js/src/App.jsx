import React, { Component } from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarSelected: null,
    };

    this.calendarHandle = this.calendarHandle.bind(this);
  }

  buttonHandler(action) {
    const dateFormat = 'YYYY-MM-DD';
    let startDate;
    let endDate;
    switch (action) {
      case 'today':
        startDate = dayjs().format(dateFormat);
        endDate = startDate;
        break;
      case 'tomorrow':
        startDate = dayjs()
          .add(1, 'day')
          .format(dateFormat);
        endDate = startDate;
        break;
      case 'week':
        startDate = dayjs()
          .startOf('week')
          .add(1, 'day') // Week starts on Sunday, but we want to use Monday.
          .format(dateFormat);
        endDate = dayjs()
          .endOf('week')
          .add(1, 'day') // Week ends on Saturday, but we want to use Sunday.
          .format(dateFormat);
        break;
      case 'month':
        startDate = dayjs()
          .startOf('month')
          .format(dateFormat);
        endDate = dayjs()
          .endOf('month')
          .format(dateFormat);
        break;
      case 'clear':
        startDate = '';
        endDate = '';
        break;
      default:
        // Nothing to do here.
    }
    // Clears calendar
    this.setState({
      calendarSelected: null,
    });
    // Apply filters.
    this.applyFilters(startDate, endDate);
  }

  calendarHandle(date) {
    this.setState({
      calendarSelected: date,
    });
    const startDate = dayjs(date).format('YYYY-MM-DD');
    const endDate = startDate;
    this.applyFilters(startDate, endDate);
  }

  // eslint-disable-next-line class-methods-use-this
  applyFilters(startDate = '', endDate = '') {
    const form = document.getElementById('views-exposed-form-events-page-1');
    form.elements[0].value = startDate;
    form.elements[1].value = endDate;
    form.elements[2].click();
  }

  render() {
    const { calendarSelected } = this.state;
    const dateButtonsContent = [
      {
        action: 'today',
        label: 'Hoy',
      },
      {
        action: 'tomorrow',
        label: 'Mañana',
      },
      {
        action: 'week',
        label: 'Esta semana',
      },
      {
        action: 'month',
        label: 'Este mes',
      },
      {
        action: 'clear',
        label: 'Ver todo',
      },
    ];
    const dateButtons = dateButtonsContent.map(item => (
      <button
        type="button"
        onClick={() => this.buttonHandler(item.action)}
        key={item.action}
      >
        {item.label}
      </button>
    ));
    // Styles.
    const appStyles = {
      display: 'flex',
    };
    const buttonContainerStyles = {
      flexGrow: '1',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(2, 60px)',
      gridGap: '20px',
      marginRight: '50px',
    };
    return (
      <div style={appStyles}>
        <div style={buttonContainerStyles}>
          {dateButtons}
        </div>
        <Calendar
          value={calendarSelected}
          onChange={this.calendarHandle}
          locale="es-CR"
          calendarType="ISO 8601"
          minDate={new Date()}
          showNeighboringMonth={false}
        />
      </div>
    );
  }
}

export default App;
