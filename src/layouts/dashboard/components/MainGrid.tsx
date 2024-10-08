import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import ChartUserByCountry from './ChartUserByCountry';
import CustomizedTreeView from './CustomizedTreeView';
import CustomizedDataGrid from './CustomizedDataGrid';
import ReturnsChart from './ReturnsChart';
import ServicesChart from './ServicesChart';
import StatCard, { StatCardProps } from './StatCard';
import {homePageText as lang} from "../lang";
import {useState} from "react";

const data: StatCardProps[] = [
  {
    title: 'الطلبات المنجزة', // req in final stage
    value: '14,000',
    interval: lang.cards.period,
    trend: 'up',
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
      360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: lang.cards.requested_lands.title,
    value: '325',
    interval:'',
    trend: 'none',
    data: [
      1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
      780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
    ],
  },
  {
    title: 'الطلبات المتبقية (من الاجمالي)',
    value: '200k',
    interval: '',
    trend: 'none',
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
      520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
  {
    title: 'العوائد المالية',
    value: '200k',
    interval: lang.cards.period,
    trend: 'none',
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
      520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
];

export default function MainGrid() {

  const [showChart, setShowChart] = useState(false);


  return (
    <Box  sx={{ width: '100%', maxWidth: '100%' }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        {lang.overview}
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, md: 12, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}

        {/*<Grid size={{ sm: 12, md: 6 }}>*/}
        {/*  <ServicesChart />*/}
        {/*</Grid>*/}
        <Grid size={{ sm: 12, md: 12 , xs:12 }}>
          <ReturnsChart />
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={12} >
        <Grid size={{ md: 12, lg: 10 }}>
          <CustomizedDataGrid setShowChart={setShowChart} />
        </Grid>
        <Grid size={{ xs: 12, lg: 2 }}>
          <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
            {showChart && <ChartUserByCountry/>}
          </Stack>
        </Grid>
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
