import React from "react";
import styled, { createGlobalStyle } from 'styled-components'
import ScheduleSelector from 'react-schedule-selector'

const MainDiv = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

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
  state = { schedule: [],
            otherSchedule: origSchedule};

  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule })
    this.setState({ otherSchedule: [...origSchedule, ...newSchedule]})
    console.log("new schedule")
    console.log(this.state.otherSchedule)
    console.log(this.state.schedule)
  };

  render() {
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
