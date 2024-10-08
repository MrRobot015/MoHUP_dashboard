import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material/styles';
import {homePageText as lang} from '../lang'
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {Autocomplete} from "@mui/material";
import TextField from "@mui/material/TextField";
import {useState} from "react";

export default function ReturnsChart() {
  const theme = useTheme();

  const [value, setValue] = useState<string | null>('كل الولايات')

  const colorPalette = [
    (theme.vars || theme).palette.primary.dark,
    (theme.vars || theme).palette.primary.main,
    (theme.vars || theme).palette.primary.light,
    (theme.vars || theme).palette.primary.contrastText,
  ];
  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          {lang.returns_chart.title + ' ' + value}
        </Typography>
        <Stack sx={{ justifyContent: 'space-between' }}>
          <Stack
            direction="row"
            sx={{
              alignContent: { xs: 'center', sm: 'flex-start' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="h4" component="p">
              1.3M
            </Typography>
            <Chip size="small" color="success" label="+18%" />
          </Stack>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {lang.returns_chart.description}
          </Typography>
        </Stack>
        <Autocomplete
            freeSolo
            onChange={(event: any, newValue: string | null) => {
              setValue(newValue);
            }}
            options={[ 'كل الولايات', 'مسقط' ,  'ظفار','مسندم','البريمي' , 'الداخلية' ,'شمال الباطنة' ,'جنوب الباطنة' ,'جنوب الشرقية' ,'شمال الشرقية' ,'الظاهرة' ,'الوسطى']}
            sx={{ width: 300 }}
            disableClearable
            renderInput={(params) => <TextField {...params}   sx={{direction:'rtl'}} />}
        />
        <BarChart
          borderRadius={8}
          xAxis={
            [
              {
                scaleType: 'band',
                categoryGapRatio: 0.5,
                data: [
                  lang.services_chart.choose_your_land,
                  lang.services_chart.buy_your_land,
                  lang.services_chart.plan_your_land,
                  lang.services_chart.future_cities,
                ],
              },
            ] as any
          }
          series={[
            {
              id: 'income',
              label: 'OMR',
              data: [2234, 3872, 2998, 4125 ],
              stack: 'A',
            },
          ]}
          height={300}
          margin={{ left: 50, right: 0, top: 20, bottom: 20 }}
          grid={{ horizontal: true }}
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
          barLabel='value'
        />
      </CardContent>
    </Card>
  );
}
