import React from 'react'
import styled from 'styled-components';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const StyledRadar = styled.div`
    width:400px;
    max-width: 70vw;
    max-height:50vh;
    background-color: rgb(245, 245, 245, 0.6);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;`

const RadarPlayerGraph = ({ user }) => {

    const radarData = {
        labels: ['Handballing', 'Kicking', 'Marking', 'Speed', 'Tackling'],
        datasets: [
            {
                label: 'Attributes',
                data: [user.handballingStat, user.kickingStat, user.markingStat, user.speedStat, user.tacklingStat],
                backgroundColor: 'rgba(155, 99, 132, 0.5)',
                borderColor: 'rgba(155, 99, 132, 1)',
                borderWidth: 3,
            },
        ],
    };


    return (
        <StyledRadar>

            <Radar data={radarData} />
        </StyledRadar>
    )
}

export default RadarPlayerGraph