import React from "react";
import styled, { createGlobalStyle } from 'styled-components'
import ScheduleSelector from 'react-schedule-selector'

// The main code for the app. This implementation uses React's
// ScheduleSelector, which provides an interface where users can
// fill out a schedule grid by dragging and clicking.

const MainDiv = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
// Hard coding some availabilities for the group.
// These will be shown below the space for the user
// to input their availabilities, so the user can see
// the availability of the group so far.
var origSchedule = [new Date('2022-10-01 10:00:00'),
  new Date('2022-10-01 11:00:00'),
  new Date('2022-10-01 12:00:00'),
  new Date('2022-10-01 13:00:00'),
  new Date('2022-10-01 14:00:00'),
  new Date('2022-10-02 12:00:00'),
  new Date('2022-10-02 13:00:00'),
  new Date('2022-10-02 14:00:00'),
  new Date('2022-10-02 15:00:00'),
  new Date('2022-10-02 16:00:00'),]

class App extends React.Component {
  // This contains the state of the app.
  // We have two schedules within the state:
  // the user's schedule, and the group's schedule.
  state = { schedule: [],
            otherSchedule: origSchedule};

  // This is a function for updating both schedules within the
  // state whenever the user updates their schedule. Once the
  // user selects some new dates, we update their own schedule
  // to their new dates and then concatenate their new dates
  // with the original schedule.
  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule })
    this.setState({ otherSchedule: [...origSchedule, ...newSchedule]})
  };

  // The rendering portion uses React's ScheduleSelector package
  // to render changes in schedules.
  render() {
    // The first ScheduleSelector instance represents the user's
    // schedule. The second represents the group's schedule. Note
    // that updates to either are only made with handleChange
    // when the user changes their schedule. No updates should
    // be made if the user attempts to drag and click on the 
    // group's schedule.
    return (
      <MainDiv>
        <h1>When2Meet Clone</h1>
        <ScheduleSelector
          selection={this.state.schedule}
          numDays={5}
          minTime={8}
          startDate={new Date('2022/10/01')}
          maxTime={22}
          hourlyChunks={1}
          onChange={this.handleChange}
          selectedColor={'rgb(104, 208, 0)'}
          unselectedColor={'rgb(194, 218, 184)'}
          hoveredColor={'rgb(157, 193, 131)'}

        />
        <h1>Group Availabilities</h1>
        <p>Other people's availabilities are already shown below.</p>
        <ScheduleSelector
          selection={this.state.otherSchedule}
          startDate={new Date('2022/10/01')}
          numDays={5}
          minTime={8}
          maxTime={22}
          hourlyChunks={1}
          hoveredColor={'rgba(89, 154, 242, 1)'}
        />
      </MainDiv>
    );
  }
}

export default App;
