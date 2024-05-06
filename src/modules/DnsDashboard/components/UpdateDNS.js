import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getRecordByid, updateRecord } from '../../../services/service';

function UpdateDNS({ updatepopupstate,handleUpdateClose,id,getRecords}) {
    const [formState, setFormState] = useState({
        Adress: '',
        IP: '',
        CNAME: '',
        MX: '',
        NS: '',
        PTR: '',
        SOA: '',
        SRV: '',
        TXT: '',
        DNSSEC: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await getRecordByid(id);
            setFormState(result.data);
            console.log(result.data, "result");
        };
        fetchData();
    }, [id]);

    const handleChange = (event) => {
        console.log(event.target.name)
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateRecord(id, formState);
        getRecords()
    };


    return (
        <>
            <Dialog
                open={updatepopupstate}
                onClose={handleUpdateClose}
                aria-labelledby="form-dialog-title"
                onSubmit={handleSubmit}
            >
                <form onSubmit={handleSubmit}>
                    <DialogTitle>Update DNS</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Update the DNS records for Amazon Route 53.
                        </DialogContentText>
                        {/* A (Address) Record */}
                        <TextField
                            margin="dense"
                            id="address"
                            name="Adress"
                            label="Address"
                            type="text"
                            value={formState.Adress} 
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                        />
                        {/* AAAA (IPv6 Address) Record */}
                        <TextField
                            margin="dense"
                            id="ipv6Address"
                            name="IP"
                            label="IPv6 Address"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={formState.IP} 
                            onChange={handleChange}
                        />
                        {/* CNAME (Canonical Name) Record */}
                        <TextField
                            margin="dense"
                            id="cname"
                            name="CNAME"
                            label="Canonical Name"
                            type="text"
                            fullWidth
                            value={formState.CNAME} 
                            variant="standard"
                            onChange={handleChange}
                        />
                        {/* MX (Mail Exchange) Record */}
                        <TextField
                            margin="dense"
                            id="mailExchange"
                            name="MX"
                            label="Mail Exchange"
                            type="text"
                            fullWidth
                            value={formState.MX} 
                            variant="standard"
                            onChange={handleChange}
                        />
                        {/* NS (Name Server) Record */}
                        <TextField
                            margin="dense"
                            id="nameServer"
                            name="NS"
                            label="Name Server"
                            type="text"
                            fullWidth
                            value={formState.NS} 
                            variant="standard"
                            onChange={handleChange}
                        />
                        {/* PTR (Pointer) Record */}
                        <TextField
                            margin="dense"
                            id="pointer"
                            name="PTR"
                            label="Pointer"
                            type="text"
                            value={formState.PTR} 
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                        />
                        {/* SOA (Start of Authority) Record */}
                        <TextField
                            margin="dense"
                            id="authority"
                            name="SOA"
                            label="Start of Authority"
                            type="text"
                            fullWidth
                            value={formState.SOA} 
                            variant="standard"
                            onChange={handleChange}
                        />
                        {/* SRV (Service) Record */}
                        <TextField
                            margin="dense"
                            id="service"
                            name="SRV"
                            label="Service"
                            type="text"
                            value={formState.SRV} 
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                        />
                        {/* TXT (Text) Record */}
                        <TextField
                            margin="dense"
                            id="text"
                            name="TXT"
                            value={formState.TXT} 
                            label="Text"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                        />
                        {/* DNSSEC */}
                        <TextField
                            margin="dense"
                            id="dnssec"
                            name="DNSSEC"
                            label="DNSSEC"
                            value={formState.DNSSEC} 
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleUpdateClose}>Cancel</Button>
                        <Button type="submit">Update</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}

export default UpdateDNS;