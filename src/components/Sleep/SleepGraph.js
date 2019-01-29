import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

const SleepGraph = ({ sleepData }) => {
	return (
		<VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4, 5, 6, 7]}
          tickFormat={sleepData.dates}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x} hr`)}
        />
        <VictoryLine
          data={sleepData.coordinates}
           x="date"
          y="hours"
        />
      </VictoryChart>
    );
}

export default SleepGraph;