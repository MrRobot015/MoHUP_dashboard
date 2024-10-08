import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {columns, gridType, rows} from '../internals/data/gridData';

type DataGridProps = {
  type?:string,
  setShowChart?:any
}

export default function CustomizedDataGrid(props: DataGridProps): JSX.Element {
  return (
    <DataGrid
        autoHeight
        showCellVerticalBorder
        showColumnVerticalBorder
        unstable_rowSpanning={props.type === 'lands'}
      checkboxSelection={props.type !== 'orders' && props.type !== 'lands'}
      rows={gridType(props.type).rows}
      columns={gridType(props.type).columns}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
      }
      initialState={{
        pagination: { paginationModel: { pageSize: 20 } },
      }}
      onRowSelectionModelChange={()=>{
        //TODO: work on logic
        if(props.type !== 'orders' && props.type !== 'lands'){
           props.setShowChart(true)
        }
      }}
      pageSizeOptions={[10, 20, 50]}
      disableColumnResize
      density="compact"
      slotProps={{
        filterPanel: {
          filterFormProps: {
            logicOperatorInputProps: {
              variant: 'outlined',
              size: 'small',
            },
            columnInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            operatorInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            valueInputProps: {
              InputComponentProps: {
                variant: 'outlined',
                size: 'small',
              },
            },
          },
        },
      }}
    />
  );
}
