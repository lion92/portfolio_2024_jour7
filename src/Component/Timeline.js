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
                            <p>2015-1016</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot>

                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px', px: 2}}>
                            <p>Professeur contractuel science de laboratoire
                                au lycée</p>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{m: 'auto 0'}}
                            variant="body2"
                            color="text.secondary"
                        >
                            <p>2018-2019</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot color="primary">
                                <LaptopMacIcon/>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px', px: 2}}>

                            <p>Développeur java
                                DSI</p>
                        </TimelineContent>
                    </TimelineItem> <TimelineItem>
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        <p>2019-2020</p>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot>
                            <LaptopMacIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <p> Arkances Développeur Java</p>
                    </TimelineContent>
                </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{m: 'auto 0'}}
                            variant="body2"
                            color="text.secondary"
                        >
                            <p> 2021</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot color="primary">
                                <LaptopMacIcon/>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px', px: 2}}>
                            <p>
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
                            <p> 2022-Actuellement</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot>
                                <LaptopMacIcon/>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px', px: 2}}>
                            <p> 2022-Actuellement</p>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>

            </div>

        </>
    );
}