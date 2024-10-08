import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {homePageText as lang} from '../../../lang'

export default function MapFilters() {
    return (
        <FormControl>
            {/*<FormLabel id="demo-row-radio-buttons-group-label">Service</FormLabel>*/}
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel
                    value={'الكل'}
                    control={<Radio/>}
                    label={'الكل'}
                />
                <FormControlLabel
                    value={lang.services_chart.choose_your_land}
                    control={<Radio/>}
                    label={lang.services_chart.choose_your_land}
                />
                <FormControlLabel
                    value={lang.services_chart.buy_your_land}
                    control={<Radio/>}
                    label={lang.services_chart.buy_your_land}
                />
                <FormControlLabel
                    value={lang.services_chart.plan_your_land}
                    control={<Radio/>}
                    label={lang.services_chart.plan_your_land}
                />
                <FormControlLabel
                    value={lang.services_chart.future_cities}
                    control={<Radio/>}
                    label={lang.services_chart.future_cities}/>
            </RadioGroup>
        </FormControl>
    );
}
