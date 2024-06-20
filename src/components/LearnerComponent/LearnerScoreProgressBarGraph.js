
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoursesTopicsScoresRequest } from '../../actions/LearnerAction/LearnerScoreProgressBarGraphAction';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip, VictoryGroup } from 'victory';

function LearnerScoreProgressBarGraph() {
    const dispatch = useDispatch();
    const id = sessionStorage.getItem("UserSessionID");
    const scoreProgressSelector = useSelector((state) => state.scoreProgressBarGraph.scoreProgress);


    useEffect(() => {
        dispatch(fetchCoursesTopicsScoresRequest(id));
    }, [dispatch]);

    // Get all unique topics
    const topics = [...new Set(scoreProgressSelector.map(item => item.topicName))];

    // Get all unique courses
    const courses = [...new Set(scoreProgressSelector.map(item => item.courseName))];

    const topicColors = ['#e6eefb', '#27235C']

    // Calculate chart width based on the number of courses and topics
    const chartWidth = 100 * courses.length * topics.length;

    return (
        <div style={{ marginLeft: "-10%", marginTop: "-12%", width: `650px`, height: '400px' }}>
            <VictoryChart domainPadding={55} padding={{ top: 20, bottom: 60, left: 100, right: 80 }}>
                <VictoryAxis tickValues={courses} tickFormat={courses} />
                <VictoryAxis dependentAxis />
                <VictoryGroup offset={15}>
                    {topics.map((topic, index) => (
                        <VictoryBar
                            key={index}
                            data={scoreProgressSelector.filter(item => item.topicName === topic)}
                            x="courseName"
                            y="score"
                            labels={({ datum }) => `Topic: ${topic}, Score: ${datum.score}`}
                            labelComponent={<VictoryTooltip />}
                            style={{ data: { fill: topicColors[index % topicColors.length] } }}
                        />
                    ))}
                </VictoryGroup>
            </VictoryChart>
        </div>
    );
}

export default LearnerScoreProgressBarGraph;