import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import {GridCellParams, GridColDef, GridRowParams, GridRowsProp} from '@mui/x-data-grid';
import {SparkLineChart} from '@mui/x-charts/SparkLineChart';
import {Poll} from "@mui/icons-material";
import { Link } from "react-router-dom";
import {paths} from "../../../../routes/paths";
import {Tooltip} from "@mui/material";
import {homePageText as lang} from "../../lang"

type SparkLineData = number[];

function getDaysInMonth(month: number, year: number) {
    const date = new Date(year, month, 0);
    const monthName = date.toLocaleDateString('en-US', {
        month: 'short',
    });
    const daysInMonth = date.getDate();
    const days = [];
    let i = 1;
    while (days.length < daysInMonth) {
        days.push(`${monthName} ${i}`);
        i += 1;
    }
    return days;
}

function renderSparklineCell(params: GridCellParams<SparkLineData, any>) {
    const data = getDaysInMonth(4, 2024);
    const {value, colDef} = params;

    if (!value || value.length === 0) {
        return null;
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
            <SparkLineChart
                data={value}
                width={colDef.computedWidth || 100}
                height={32}
                plotType="bar"
                showHighlight
                showTooltip
                colors={['hsl(210, 98%, 42%)']}
                xAxis={{
                    scaleType: 'band',
                    data,
                }}
            />
        </div>
    );
}

function renderStatus(status: 'Online' | 'Offline') {
    // TODO : work on logic

    return <Chip label={status} color={'success'} size="small"/>;
}

export function renderAvatar(
    params: GridCellParams<{ name: string; color: string }, any, any>,
) {
    if (params.value == null) {
        return '';
    }

    return (
        <Avatar
            sx={{
                backgroundColor: params.value.color,
                width: '24px',
                height: '24px',
                fontSize: '0.85rem',
            }}
        >
            {params.value.name.toUpperCase().substring(0, 1)}
        </Avatar>
    );
}

export const columns: GridColDef[] = [
    {field: 'pageTitle', headerName: 'المحافظة', flex: 1, align: 'right',minWidth:100},
    {
        field: 'status',
        headerName: 'نسبة تلبية الطلبات',
        flex: 1,
        headerAlign: 'center',
        align: 'center',
        minWidth:100,
        renderCell: (params) => renderStatus(params.value as any),
    },
    {
        field: 'users',
        headerName: 'الاراضي ',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth:100

    },
    {
        field: 'eventCount',
        headerName: 'الطلبات الجديدة',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth:100

    },
    {
        field: 'viewsPerUser',
        headerName: 'الطلبات المكتملة',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth:100

    },
    {
        field: 'viewsPerUser1',
        headerName: 'العدد الكلي للطلبات',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth:100
    },
];

export const rows: GridRowsProp = [
    {
        id: 1,
        pageTitle: 'مسقط',
        status: '70%',
        eventCount: 6750,
        users: 15030,
        viewsPerUser: 9400,
        viewsPerUser1: 19400,
    },
    {
        id: 2,
        pageTitle: 'ظفار',
        status: '50%',
        eventCount: 5653,
        users: 12240,
        viewsPerUser: 7569,
        viewsPerUser1: 17569,
    },
    {
        id: 3,
        pageTitle: 'مسندم',
        status: '50%',
        eventCount: 3455,
        users: 5840,
        viewsPerUser: 1520,
        viewsPerUser1: 11520,
    },
    {
        id: 4,
        pageTitle: 'البريمي',
        status: '10%',
        eventCount: 112543,
        users: 96240,
        viewsPerUser: 450,
        viewsPerUser1: 1450,
    },
    {
        id: 5,
        pageTitle: 'الداخلية',
        status: '40%',
        eventCount: 3653,
        users: 14240,
        viewsPerUser: 3100,
        viewsPerUser1: 13100,

    },
    {
        id: 6,
        pageTitle: 'شمال الباطنة',
        status: '51%',
        eventCount: 10543,
        users: 15240,
        viewsPerUser: 7288,
        viewsPerUser1: 17288,
    },
    {
        id: 7,
        pageTitle: 'جنوب الباطنة',
        status: '30%',
        eventCount: 7853,
        users: 32240,
        viewsPerUser: 6500,
        viewsPerUser1: 16500,
    },
    {
        id: 8,
        pageTitle: 'جنوب الشرقية',
        status: '10%',
        eventCount: 8563,
        users: 48240,
        viewsPerUser: 4366,
        viewsPerUser1: 14366,
    },
    {
        id: 9,
        pageTitle: 'شمال الشرقية',
        status: '67%',
        eventCount: 4563,
        users: 18240,
        viewsPerUser: 2700,
        viewsPerUser1: 12700,
    },
    {
        id: 10,
        pageTitle: 'الظاهرة',
        status: '20%',
        eventCount: 9863,
        users: 28240,
        viewsPerUser: 5771,
        viewsPerUser1: 15771,
    },
    {
        id: 11,
        pageTitle: 'الوسطى',
        status: '5%',
        eventCount: 6563,
        users: 24240,
        viewsPerUser: 1200,
        viewsPerUser1: 11200,
    },

];

const columns_details: GridColDef[] = [
    {field: 'pageTitle', headerName: 'الولاية', flex: 1, align: 'right', minWidth: 200},
    {
        field: 'status',
        headerName: 'نسبة تلبية الطلبات',
        flex: 1,
        headerAlign: 'center',
        align: 'center',
        renderCell: (params) => renderStatus(params.value as any),
    },
    {
        field: 'users',
        headerName: 'الاراضي ',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'eventCount',
        headerName: 'عدد   الطلبات الجديدة',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'viewsPerUser',
        headerName: 'عدد الطلبات المكتملة',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'viewsPerUser1',
        headerName: 'العدد الكلي للطلبات',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
];
const rows_details: GridRowsProp = [
    {
        id: 1,
        pageTitle: 'مسقط',
        status: '70%',
        eventCount: 6750,
        users: 15030,
        viewsPerUser: 9400,
        viewsPerUser1: 19400,
    },
    {
        id: 2,
        pageTitle: 'مطرح',
        status: '50%',
        eventCount: 5653,
        users: 12240,
        viewsPerUser: 7569,
        viewsPerUser1: 17569,
    },
    {
        id: 3,
        pageTitle: 'السيب',
        status: '50%',
        eventCount: 3455,
        users: 5840,
        viewsPerUser: 1520,
        viewsPerUser1: 11520,
    },
    {
        id: 4,
        pageTitle: 'بوشر',
        status: '10%',
        eventCount: 112543,
        users: 96240,
        viewsPerUser: 450,
        viewsPerUser1: 1450,
    },
    {
        id: 5,
        pageTitle: 'العامرات',
        status: '40%',
        eventCount: 3653,
        users: 14240,
        viewsPerUser: 3100,
        viewsPerUser1: 13100,

    },
    {
        id: 6,
        pageTitle: 'قريات',
        status: '51%',
        eventCount: 10543,
        users: 15240,
        viewsPerUser: 7288,
        viewsPerUser1: 17288,
    },

];

const columns_details_3: GridColDef[] = [
    {field: 'pageTitle', headerName: 'المحافظة', flex: 1, align: 'right'},
    {
        field: 'status1',
        headerName: "حالة الاراضي",
        flex: 1,
        headerAlign: 'center',
        align: 'center',
    },{
        field: 'status',
        headerName: "الأراضي",
        flex: 1,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'users',
        headerName: lang.services_chart.choose_your_land,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'eventCount',
        headerName: lang.services_chart.buy_your_land,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
]

const rows_details_3: GridRowsProp = [
    {
        id: 1,
        pageTitle: 'مسقط',
        status1: lang.cards.requested_lands.title,
        status: 15030+6750,
        eventCount: 6750,
        users: 15030,
    },
    {
        id: 2,
        pageTitle: 'مسقط',
        status1: lang.cards.booked_lands.title,
        status: 15035+6755,
        eventCount: 6755,
        users: 15035,
    },
    {
        id: 3,
        pageTitle: 'مسقط',
        status1: lang.cards.looked_lands.title,
        status: 15031+6753,
        eventCount: 6753,
        users: 15031,
    },
];

export const gridType = (type?:string) =>{
    if(type==='general'){
        return {rows: rows_details, columns: columns_details};
    }else if(type==='lands'){
        return {rows: rows_details_3, columns: columns_details_3};
    } else {
        return {rows,columns}
    }
}

