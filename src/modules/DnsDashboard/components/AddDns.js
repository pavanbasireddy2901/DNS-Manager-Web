
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { postRecord } from '../../../services/service';

function AddDns({open, handleClose, getRecords}) {

    
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
  
  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleSubmit =async (event) => {
    event.preventDefault();
    await postRecord(formState).then((response) => {
         getRecords()
    handleClose()
    }).catch((error) => {
        console.log(error)
    }
    );
  };

return (
    <>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
           
        >
            <form >
            <DialogTitle>Add DNS</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Add the DNS for the Amazon Route 53.
                </DialogContentText>    
                {/* A (Address) Record */}
                <TextField
                    margin="dense"
                    id="address"
                    name="Adress"
                    label="Address"
                    type="text"
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
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                />
                {/* TXT (Text) Record */}
                <TextField
                    margin="dense"
                    id="text"
                    name="TXT"
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
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="button" onClick={handleSubmit}>submit</Button>
            </DialogActions>
            </form>
        </Dialog>
    </>
);
}

export default AddDns