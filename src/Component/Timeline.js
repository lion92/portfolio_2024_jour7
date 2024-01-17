import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import Header from "./Header";
import Footer from "./Footer";

export default function Temps() {
    return (
        <>
            <Header></Header>
            <h1>Parcours</h1>
            <div className="container">
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{m: 'auto 0'}}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            2015-1016
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot>

                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px', px: 2}}>
                            Professeur contractuel science de laboratoire
                            au lycée
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{m: 'auto 0'}}
                            variant="body2"
                            color="text.secondary"
                        >
                            2018-2019
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot color="primary">
                                <LaptopMacIcon/>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px', px: 2}}>

                            Développeur java
                            DSI
                        </TimelineContent>
                    </TimelineItem> <TimelineItem>
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        2019-2020
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot>
                            <LaptopMacIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        Arkances Développeur Java
                    </TimelineContent>
                </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{m: 'auto 0'}}
                            variant="body2"
                            color="text.secondary"
                        >
                            2021
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot color="primary">
                                <LaptopMacIcon/>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px', px: 2}}>

                            Ideta Développeur Node
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{m: 'auto 0'}}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            2022-Actuellement
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot>
                                <LaptopMacIcon/>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px', px: 2}}>
                            Développeur Fullstack Mission pour Edf <br/>
                            Consultant chez Arolla
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>

            </div>
            <Footer></Footer>
        </>
    );
}