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
    width:300px;
    height:350px;
    max-width: 70vw;
    max-height:50vh;
    background-color: rgb(0, 80, 0, 0.3);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;`

const radarOptions = {
    responsive: false,
    maintainAspectRatio: true,
    scale: {
        ticks: {
            beginAtZero: true,
            max: 10
        }
    }
};

const RadarPlayerGraph = ({ user }) => {


    const radarData = {
        labels: ['Kicking', 'Handballing', 'Tackling', 'Speed', 'Marking'],
        options: radarOptions,




        datasets: [
            {
                label: "Stats",
                data: [user.kickingStat, user.handballingStat, user.tacklingStat, user.speedStat, user.markingStat],
                backgroundColor: 'rgba(245, 245, 245, 0.5)',
                borderColor: 'rgba(240, 240, 240, 0.8)',
                borderWidth: 0.5,



            },

        ],


    }
    const options = {
        scales:
        {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,
                suggestedMax: 10,
                ticks: {
                    stepSize: 2,


                    font: {
                        size: 8,

                    }
                },
                pointLabels: {

                    font: {
                        size: 14,
                        family: 'Roboto',
                        weight: 'bold',
                    }
                }

            }
        },
    }

    return (
        <StyledRadar>


            <Radar data={radarData} options={options} />
        </StyledRadar >
    )
}

export default RadarPlayerGraph