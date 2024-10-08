import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../../internals/components/Copyright';
import ChartUserByCountry from '../ChartUserByCountry';
import CustomizedDataGrid from '../CustomizedDataGrid';
import {detailsPage as lang} from "../../lang";
import {homePageText as lang2} from "../../lang";
import Chart from "./components/Chart";
import StatCard, {StatCardProps} from "../StatCard";
import ServicesChart from "../ServicesChart";
import ReturnsChart from "../ReturnsChart";
import SimpleMap from "./components/Map";
import {useState} from "react";
import MapFilters from "./components/MapFilters";



const data: StatCardProps[] = [
    {
        title: lang2.cards.looked_lands.title,
        value: '14k',
        interval: lang2.cards.period,
        trend: 'up',
        data: [
            200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
            360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
        ],
    },
    {
        title: lang2.cards.requested_lands.title,
        value: '325',
        interval: lang2.cards.period,
        trend: 'down',
        data: [
            1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
            780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
        ],
    },
    {
        title: lang2.cards.booked_lands.title,
        value: '200k',
        interval: lang2.cards.period,
        trend: 'neutral',
        data: [
            500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
            520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
        ],
    },
    {
        title: lang2.cards.vacant_lands.title,
        value: '200k',
        interval: lang2.cards.period,
        trend: 'neutral',
        data: [
            500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
            520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
        ],
    },
];

export default function Details() {

    const [showDetails, setShowDetails] = useState(false);
    const [showChart, setShowChart] = useState(false);


    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            {/* cards */}
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                {lang.header}
            </Typography>
            <Grid
                container
                spacing={2}
                columns={12}
                sx={{ mb: (theme) => theme.spacing(1) }}
            >
                <Grid size={{ sm: 12, md: 12 }}>
                    <MapFilters/>
                    <SimpleMap/>
                </Grid>

                {data.map((card, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                        <StatCard {...card} />
                    </Grid>
                ))}
                <Grid size={{ sm: 12, md: 6 }}>
                    <ServicesChart />
                </Grid>
                <Grid size={{ sm: 12, md: 6 }}>
                    <ReturnsChart />
                </Grid>

                <Grid size={{ sm: 12, md: 6 }}>
                    <Chart title='الطلبات المكتملة' />
                </Grid>
                <Grid size={{ sm: 12, md: 6 }}>
                    <Chart title='الطلبات في انتظار الدفع' />
                </Grid>
                <Grid size={{ sm: 12, md: 6 }}>
                    <Chart title='الطلبات في انتظار التوزيع' />
                </Grid>
                <Grid size={{ sm: 12, md: 6 }}>
                    <Chart title='الطلبات المؤجلة' />
                </Grid>
            </Grid>
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Details
            </Typography>
            <Grid container spacing={2} columns={12}>
                <Grid size={{ md: 12, lg: 10 }}>
                    <CustomizedDataGrid type='general' setShowChart={setShowChart}/>
                    <CustomizedDataGrid type='orders'/>
                </Grid>
                <Grid size={{ xs: 12, lg: 2 }}>
                    <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
                        {showChart && <ChartUserByCountry setShowDetails={setShowDetails}/>}
                    </Stack>
                </Grid>
            </Grid>
            <Grid size={{ sm: 12, md: 12 }} mt={2}>
                {showDetails && <CustomizedDataGrid type='lands'/>}
            </Grid>
            <Copyright sx={{ my: 4 }} />
        </Box>
    );
}
