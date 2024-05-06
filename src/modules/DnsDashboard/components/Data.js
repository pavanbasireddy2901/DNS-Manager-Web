
import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteRecord } from '../../../services/service';

function Data({ records ,updatePopUp,getRecords}) {

    const updateRecord = (id) => {
        console.log("update record", id)
        updatePopUp(id)
    }
    const DeleteRecord = async (id) => {
        await deleteRecord(id)
        getRecords()
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Address</th>
                        <th>IP</th>
                        <th>CNAME</th>
                        <th>MX</th>
                        <th>NS</th>
                        <th>PTR</th>
                        <th>SOA</th>
                        <th>SRV</th>
                        <th>TXT</th>
                        <th>DNSSEC</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map(record => (
                        <tr key={record._id}>
                            <td>{record._id}</td>
                            <td>{record.Address}</td>
                            <td>{record.IP}</td>
                            <td>{record.CNAME}</td>
                            <td>{record.MX}</td>
                            <td>{record.NS}</td>
                            <td>{record.PTR}</td>
                            <td>{record.SOA}</td>
                            <td>{record.SRV}</td>
                            <td>{record.TXT}</td>
                            <td>{record.DNSSEC}</td>
                            <td >
                                <div style={{ display: 'flex' }}>
                                    <IconButton aria-label="delete" color="secondary" onClick={()=>{DeleteRecord(record._id)}} >
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton aria-label="update" color="primary" onClick={() => updateRecord(record._id)}>
                                        <EditIcon />
                                    </IconButton>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table >
        </>
    )
}

export default Data