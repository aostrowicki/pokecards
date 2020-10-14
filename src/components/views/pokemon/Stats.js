import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styled/colors'


const Bar = styled.div`
    width:280px;
    height: 25px;
    border-radius:6px;
    background: white;
    border:solid 1px ${colors.border};
`

const Progress = styled.div`
    width:${props => props.width > 100 ? '100' : props.width}%;
    height: 23px;
    border-radius:6px;
    background:${props => {
        switch (true) {
            case props.width >= 200:
                return '#101010';
            case props.width >= 150:
                return '#7337ea ';
            case props.width >= 100:
                return '#FF3838';
            default:
                return '#1ECC4F';
        }
    }
    };
    padding: 0 6px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    pointer-events:none;

    font-family: Roboto Mono;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-transform:uppercase;
    color:white;
`

const Label = styled.div`
    font-family: Roboto Mono;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-transform:uppercase;
    color:${colors.text};
    margin:10px 0 2px;
`

const Header = styled.p`
    font-family: Roboto Mono;
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    margin: 50px 0 20px;
`

const Stat = ({ name, value }) => {

    return (
        <>
            <Label>
                {name}
            </Label>
            <Bar>
                <Progress width={value}>
                    {value}
                </Progress>
            </Bar>
        </>
    )
}


export default function Stats({ stats }) {
    return (
        <div>
            <Header>Stats</Header>
            {stats.map(item => !item.stat.name.includes('special') ? <Stat key={item.stat.name} name={item.stat.name} value={item.base_stat}></Stat> : '')}
        </div>
    )
}
