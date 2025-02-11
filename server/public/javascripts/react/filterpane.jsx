class FilterPane extends React.Component {
  componentDidMount() {
    flatpickr('.datepicker', {
      onChange: (selectedDates, dateStr, instance) => {
        this.props.updateFilters({
          target: {
            name: instance.input.name,
            value: dateStr,
          },
        });
      },
    });
  }

  render() {
    const { filters, filtersActive, toggleFilters, updateFilters, getData } = this.props;
    return <div className={`quickview ${filtersActive ? 'is-active' : ''}`}>
      <header className='quickview-header'>
        <p className='title'>
          Filter Data
          <span className='icon'>
            <i className='fas fa-filter'></i>
          </span>
        </p>
        <span className='delete' onClick={toggleFilters}></span>
      </header>

      <div className='quickview-body'>
        <div className='quickview-block'>
          <section className='section'>
            <article className='message is-info'>
              <div className='message-body'>
                Note you <i>must</i> use start and end dates together, and end dates are <i>not</i> inclusive.
              </div>
            </article>
            <div className='field'>
              <label className='label'>Start Date:</label>
              <div className='control'>
                <input className='input datepicker' name='startDate' type='date' placeholder='Example: 2019-01-20' value={filters.startDate} onChange={updateFilters} />
              </div>
            </div>
            <div className='field'>
              <label className='label'>End Date:</label>
              <div className='control'>
                <input className='input datepicker' name='endDate' type='date' placeholder='Example: 2019-01-21' value={filters.endDate} onChange={updateFilters} />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Section:</label>
              <div className='control'>
                <input className='input' name='section' type='text' placeholder='Example: A' value={filters.section} onChange={updateFilters} />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Lab:</label>
              <div className='control'>
                <input className='input' name='lab' type='text' placeholder='Example: quacks lab' value={filters.lab} onChange={updateFilters} />
              </div>
            </div>
            <div className='field'>
              <label className='label'>TA:</label>
              <div className='control'>
                <input className='input' name='ta' type='text' placeholder='Example: iliano' value={filters.ta} onChange={updateFilters} />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Student:</label>
              <div className='control'>
                <input className='input' name='student_id' type='text' placeholder='Example: aditya' value={filters.student_id} onChange={updateFilters} />
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className='quickview-footer'>
        <div className='control'>
          <a className='button is-info' onClick={getData}>
            <span className='icon'>
              <i className='fa fa-table'></i>
              </span>
            <span>View Data</span>
          </a>
        </div>
        <div className='control'>
          <a className='button' onClick={() => updateFilters()}>
            <span className='icon'>
              <i className='fa fa-broom'></i>
              </span>
            <span>Clear Filters</span>
          </a>
        </div>
      </footer>
    </div>;
  }
}
