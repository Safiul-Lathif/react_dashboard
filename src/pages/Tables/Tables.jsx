
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../dummy';
import '../Tables/table.css';

const Tables=()=>{
    return(
        <div className='datatable h-full p-20'>
          <DataGrid
              rows={userRows}
              columns={userColumns}
              initialState={{
              pagination: {
               paginationModel: { page: 0, pageSize: 5 },
                },
             }}
            pageSizeOptions={[5, 10]}
          />
        </div>
    )
}
export default Tables