import React, { useState } from 'react';
import Subheader from '../components/Subheader';
import { Box, Grid, TextField, FormControl, InputLabel, MenuItem, Select, Button, Modal, Fade, Checkbox, Typography, Backdrop } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';


import Table from '../components/Table'
import { useLocation, useNavigate } from 'react-router-dom';

function DebtFollowUp() {
    const [selectedValue, setSelectedValue] = useState('');
    const navigate = useNavigate();
    const handleClick = (row) => {
        console.log('Selected Row:', row);
        navigate('/Fromnotify');
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };



    const handleTableClick = (row) => {
        console.log('Selected Row:', row);
        navigate('/detailEmployer', {
            state: {
                id: row.id,
                // name: row.name,
                // codeID: row.codeID,
                // tel: row.tel,
                // email: row.email,
                // status: row.status,
                // nCompany: row.nCompany,
                // quantity: row.quantity
            }
        });
    };


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const columns = [
        { header: '', field: 'Checkbox' }, // ช่องสำหรับ Checkbox
        { header: 'ความเสี่ยง', field: 'Risk' },
        { header: 'รหัสบัตรประชาชน', field: 'codeID' },
        { header: 'ชื่อ-นามสกุล', field: 'name' },
        { header: 'สถานะงาน', field: 'status' },
        { header: 'เลขที่บัญชี', field: 'AccountNumber' },
        { header: 'กลุ่มผู้กู้', field: 'BorrowerGroup' },
        { header: 'งวดชำระ', field: 'Installment' },
        { header: 'ระดับชั้น', field: 'Level' },
        { header: 'การติดตามหนี้', field: 'DebtFollowUp' },
        { header: 'วันที่ติดตามหนี้', field: 'DebtFollowUpDate' },
        {
            header: 'การจัดการ',
            render: (_, row) => (
              <button style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f0f0f0',
                border: 'none',
                cursor: 'pointer',
              }} ><VisibilityIcon fontSize="small" /></button>),
          }

    ];

    const rows = [
        {
            id: '1',
            Checkbox: <Checkbox />, // เพิ่ม Checkbox ตรงนี้
            Risk: '🔴',
            codeID: 'x-xxxx-xxxx-x-x',
            name: 'สุภาวดี สวยดี',
            status: 'งานที่มีการผิดนัดชำระ',
            AccountNumber: '00-000-000-00',
            BorrowerGroup: 'กลุ่มผู้กู้ยืมสัญญาปกติ',
            Installment: 'รายปี',
            Level: 'A4',
            DebtFollowUp: 'Promise to pay',
            DebtFollowUpDate: '21/09/2564'
        },
        {
            id: '2',
            Checkbox: <Checkbox />,
            Risk: '🔴',
            codeID: 'x-xxxx-xxxx-x-x',
            name: 'สุภาวดี สวยดี',
            status: 'งานที่มีการผิดนัดชำระ',
            AccountNumber: '00-000-000-00',
            BorrowerGroup: 'กลุ่มผู้กู้ยืมสัญญาปกติ',
            Installment: 'รายปี',
            Level: 'A4',
            DebtFollowUp: 'Promise to pay',
            DebtFollowUpDate: '21/09/2564'
        },
        {
            id: '3',
            Checkbox: <Checkbox />,
            Risk: '🔴',
            codeID: 'x-xxxx-xxxx-x-x',
            name: 'สุภาวดี สวยดี',
            status: 'งานที่มีการผิดนัดชำระ',
            AccountNumber: '00-000-000-00',
            BorrowerGroup: 'กลุ่มผู้กู้ยืมสัญญาปกติ',
            Installment: 'รายปี',
            Level: 'A4',
            DebtFollowUp: 'Promise to pay',
            DebtFollowUpDate: '21/09/2564'
        },
        {
            id: '4',
            Checkbox: <Checkbox />,
            Risk: '🟡',
            codeID: 'x-xxxx-xxxx-x-x',
            name: 'สุภาวดี สวยดี',
            status: 'งานที่มีการผิดนัดชำระ',
            AccountNumber: '00-000-000-00',
            BorrowerGroup: 'กลุ่มผู้กู้ยืมสัญญาปกติ',
            Installment: 'รายปี',
            Level: 'A4',
            DebtFollowUp: 'Promise to pay',
            DebtFollowUpDate: '21/09/2564'
        },
    ];
    return (
        <>
            <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 10, backgroundColor: '#fff' }}>
                <Subheader textHeader='ติดตามหนี้' />
            </Box>
            <Box style={{ marginTop: '50px' }}>
                <Box sx={{ width: '80%', right: 0, margin: 'auto', }} textAlign='end' >

                    <Grid container md={12} spacing={3} sx={{ margin: '0 auto', right: '0' }}>
                        <Grid item md={3}>

                            <TextField
                                id="outlined"
                                label="รหัสผู้กู้ / ชื่อผู้กู้"
                                defaultValue=""
                                size='small'
                                sx={{ fontSize: '16px' }}
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={3}>

                            <TextField
                                id="outlined"
                                label="เลขประจำตัวประชาชน"
                                defaultValue=""
                                size='small'
                                sx={{ fontSize: '16px' }}
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={3}>

                            <TextField
                                id="outlined"
                                label="เลขที่บัญชี"
                                defaultValue=""
                                size='small'
                                sx={{ fontSize: '16px' }}
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={3}>
                            <FormControl fullWidth >
                                <InputLabel id="dropdown-label" style={{ marginTop: '-7px' }} textAlign='start'>สถานะลูกหนี้</InputLabel>
                                <Select
                                    labelId="dropdown-label"
                                    id="dropdown"
                                    value={selectedValue}
                                    onChange={handleChange}
                                    label="สถานะ"
                                    size='small'
                                >
                                    <MenuItem value={1}>ครบกำหนดชำระ</MenuItem>
                                    <MenuItem value={2}>ลูกหนี้ไก่ลเกลี่ย</MenuItem>
                                    <MenuItem value={3}>ลูกหนี้ในองค์กร</MenuItem>
                                    <MenuItem value={4}>ลูกหนี้เสียชีวิต</MenuItem>
                                    <MenuItem value={4}>ลูกหนี้พิการ</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>

                    </Grid>
                </Box>

                {/* </Grid> */}
                <Box m={5}>
                    <Table columns={columns} rows={rows} />
                </Box>

                <Box sx={{ margin: 5, textAlign: "right" }}>

                    <Button onClick={handleOpen} variant="contained" color="error" size="large">
                        ส่งแจ้งเตือน
                    </Button>
                </Box>
            </Box>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            เลือกการติดตามหนี้
                        </Typography>
                        <FormControl fullWidth >
                                <InputLabel id="dropdown-label" style={{ marginTop: '-7px' }} textAlign='start'>รูปแบบเอกสารติดตามหนี้</InputLabel>
                                <Select
                                    labelId="dropdown-label"
                                    id="dropdown"
                                    value={selectedValue}
                                    onChange={handleChange}
                                    label="รูปแบบเอกสารติดตามหนี้"
                                    size='small'
                                >
                                    <MenuItem value={1}>รูปแบบที่ 1 (สำหรับลูกหนี้ที่ผิดนัดชำระ)</MenuItem>
                                   

                                </Select>
                            </FormControl>

                        <Grid container md={12}>
                            <Grid item md={6}>

                                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                    <Checkbox />   SMS
                                </Typography>
                            </Grid>
                            <Grid item md={6}>

                                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                    <Checkbox />   E-mail
                                </Typography>
                            </Grid>
                            <Grid item md={6}>

                                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                    <Checkbox />   โทร
                                </Typography>
                            </Grid>
                            <Grid item md={6}>

                                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                    <Checkbox />   ส่งแจ้งเตือน
                                </Typography>
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
                            <Button variant="contained" color="success" onClick={handleClose}>
                                ติดตามหนี้ตามรูปแบบ
                            </Button>
                            <Button variant="contained" onClick={handleClick}>
                                สร้างรูปแบบเอง
                            </Button>
                        </Box>
                    </Box>

                </Fade>
            </Modal>

        </>
    );
}

export default DebtFollowUp;
