import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Header from "./Header";
import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

export default function Temps() {
    return (
        <div style={{position:'relative'}}>
            <Header></Header>
            <button> <NavLink to={"/Contact"}>
                <MenuItem><h2 className="menuTitle">Contact</h2></MenuItem>
            </NavLink>
            </button>
            <h1>Parcours</h1>
            <div className="container2">
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{m: 'auto 0'}}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            <p className="textTime">2015-2016</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot>

                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px', px: 2}}>
                            <p className="textTime">Professeur contractuel science de laboratoire
                                au lycée</p>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{m: 'auto 0'}}
                            variant="body2"
                            color="text.secondary"
                        >
                            <p className="textTime">2018-2019</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot color="primary">
                                <LaptopMacIcon/>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px', px: 2}}>

                            <p className="textTime">Développeur java
                                DSI</p>
                        </TimelineContent>
                    </TimelineItem> <TimelineItem>
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        <p className="textTime">2019-2020</p>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot>
                            <LaptopMacIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <p className="textTime"> Arkances Développeur Java</p>
                    </TimelineContent>
                </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{m: 'auto 0'}}
                            variant="body2"
                            color="text.secondary"
                        >
                            <p className="textTime"> 2021</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot color="primary">
                                <LaptopMacIcon/>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px', px: 2}}>
                            <p className="textTime">
                                Ideta Développeur Node</p>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{m: 'auto 0'}}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            <p className="textTime" style={{color:"red"}}> 2022-Actuellement</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot>
                                <LaptopMacIcon/>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px', px: 2}}>
                            <p className="textTime" style={{color:"red"}}> Arolla</p>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>

            </div>

        </div>
    );
}