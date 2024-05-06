import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';


import AddDns from './components/AddDns';
import { getAllRecords } from '../../services/service';
import Data from './components/Data';
import UpdateDNS from './components/UpdateDNS';
import { useState } from 'react';

function Dashboard() {

    const [open, setOpen] = useState(false);

    const [updateopen, setUpdateOpen] = useState(false);

    const [id, setId] = useState('');

    const [records, setRecords] = React.useState([]);
    const getRecords = async () => {
         try {
              const response = await getAllRecords();
              setRecords(response.data);
              console.log(records, "records");
         } catch (error) {
              console.log(error);
         }
    };
    useEffect(() => {
        getRecords();
    }, [records]);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const updatePopUp = (id) => {
        setUpdateOpen(true);
        setId(id);
    }

    const handleUpdateClose = () => {
        setUpdateOpen(false);
    }

return (
    <>
        <div className='heading'>DNS MANAGER</div>
        <div className='container'>
            <div className='container-heading'>
                <Button variant="contained" startIcon={<AddIcon />} onClick={handleClickOpen}>Add Dns</Button>
                <AddDns open={open} handleClose={handleClose}  getRecords={getRecords}/>
            </div>
            <div className='table'>
                <Data records={records} updatePopUp={updatePopUp} getRecords={getRecords} />
                <UpdateDNS updatepopupstate={updateopen} handleUpdateClose={handleUpdateClose} id={id} getRecords={getRecords}></UpdateDNS>
            </div>
        </div>
    </>
);
}
export default Dashboard