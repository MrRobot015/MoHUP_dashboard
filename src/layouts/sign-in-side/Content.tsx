import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


import {content as lang} from './lang'
import {AddLocation, DomainAdd, Paid, PinDrop, Poll } from '@mui/icons-material';

const items = [
  {
    icon: <PinDrop sx={{ color: 'text.secondary' }} />,
    title: lang.choose_your_land.title,
    description:lang.choose_your_land.description,
  },
  {
    icon: <Paid sx={{ color: 'text.secondary' }} />,
    title: lang.buy_your_land.title,
    description:lang.buy_your_land.description,
  },
  {
    icon: <AddLocation sx={{ color: 'text.secondary' }} />,
    title: lang.plan_your_land.title,
    description:lang.plan_your_land.description,
  },
  {
    icon: <DomainAdd sx={{ color: 'text.secondary' }} />,
    title: lang.future_cities.title,
    description:lang.future_cities.description,
  },
];

export default function Content() {
  return (
    <Stack
      sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Poll fontSize='large'/>
        <Typography variant="h4" component="h1" sx={{ color: 'text.primary' }}>
          {lang.title}
        </Typography>
      </Box>
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}
