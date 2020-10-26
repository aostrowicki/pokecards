import React from 'react'
import styled from 'styled-components'

const SkeletonBase = styled.div`
    background:rgba(0,0,0,0.05);
    width:${props => props.width}px;
    height:${props => props.height}px;
    border-radius:${props => props.round ? '50%' : '4px'};
    position:relative;    
    overflow:hidden;
    margin-bottom:10px;
`

const Shimmer = styled.div`
    width:100%;
    height:100%;
    top:0;
    left:0;
    position:absolute;
    animation: shimmer 2.5s infinite; 

    &::before{
        display:block;
        content:'';
        width:50%;
        height:100%;
        top:0;
        left:0;
        background:rgba(255,255,255,0.2);
        transform:skewX(-20deg);
    }

    @keyframes shimmer{
        0%{transform:translateX(-150%)}
        50%{transform:translateX(-60%)}
        100%{transform:translateX(150%)}
    }
`


export default function Skeleton({ width, height, round }) {
    return (
        <SkeletonBase width={width} height={height} round={round}>
            <Shimmer />
        </SkeletonBase>
    )
}
