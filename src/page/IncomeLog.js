import React, { useState } from 'react';
import Subheader from '../components/Subheader.js';
import { Box, Button, Grid,Select, TextField, FormControl, InputLabel, Tooltip, IconButton, MenuItem } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import Table from '../components/Table.js'
import { useLocation, useNavigate } from 'react-router-dom';

function IncomeLog() {
    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState('');


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handleFileUpload = (event, row) => {
        const file = event.target.files[0];
        if (file) {
            console.log(`Uploaded file for row:`, row);
            console.log(`File details:`, file);
            // ทำการอัพโหลดไฟล์ต่อไป เช่น ส่งไปยัง API
        }
    };


    const handleClickAdd = () => {
        navigate('/Addnotify');
    };
    const options = [
        'PDF',
        'exel',
        'CSV',
    ];

    const columns = [
        { header: 'หน่วยงาน', field: 'department' },
        { header: 'วันที่รับข้อมูล', field: 'receivedDate' },
        { 
            header: 'สถานะ', 
            render: (_, row) => (
                <span
                    style={{
                        display: 'inline-block',
                        padding: '5px 10px',
                        borderRadius: '10px',
                        color: '#fff',
                        backgroundColor: row.status === 'ได้รับข้อมูล' ? '#4caf50' : '#f44336', // เขียวถ้าได้รับข้อมูล, แดงถ้าไม่ได้รับ
                    }}
                >
                    {row.status}
                </span>
            )
        },        { header: 'จำนวนรายการ', field: 'itemCount' },
        { header: 'จำนวนเงิน', field: 'incomeAmount' },
        {
            header: 'การจัดการ',
            render: (_, row) => (
                <label
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f0f0f0',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    <input
                        type="file"
                        style={{ display: 'none' }}
                        onChange={(e) => handleFileUpload(e, row)}
                    />
                    <CloudUploadIcon fontSize="small" />
                </label>
            ),
        },];
    const rows = [
        { id: '1', department: 'กรุงไทย', receivedDate: '12/03/2567', status: 'ได้รับข้อมูล', itemCount: '1', incomeAmount: '3000-' },
        { id: '2', department: 'กรุงไทย', receivedDate: '12/03/2567', status: 'ได้รับข้อมูล', itemCount: '1', incomeAmount: '3000-' },
        { id: '3', department: 'กรุงไทย', receivedDate: '12/03/2567', status: 'ได้รับข้อมูล', itemCount: '1', incomeAmount: '3000-' },
        { id: '4', department: 'กรุงไทย', receivedDate: '12/03/2567', status: 'ได้รับข้อมูล', itemCount: '1', incomeAmount: '3000-' },
        { id: '5', department: 'กรุงไทย', receivedDate: '12/03/2567', status: 'ได้รับข้อมูล', itemCount: '1', incomeAmount: '3000-' },
        { id: '6', department: 'กรุงไทย', receivedDate: '12/03/2567', status: 'ยังไม่ได้รับ', itemCount: '1', incomeAmount: '3000-' },

    ];
    return (
        <>
            <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 10, backgroundColor: '#fff' }}>
                <Subheader textHeader='บันทึกเงินเข้า' />
            </Box>
            <Box style={{ marginTop: '80px' }}>

                <Box sx={{ width: '100%', right: 0, margin: 'auto', }} textAlign='end' >

                    <Grid container md={8} spacing={5} sx={{ margin: '0 auto', right: '0' }}>
                       
                        <Grid item md={4}>
                            <FormControl fullWidth >
                                <InputLabel id="dropdown-label" style={{ marginTop: '-7px' }} textAlign='start'>หน่วยงานรับชำระ</InputLabel>
                                <Select
                                    labelId="dropdown-label"
                                    id="dropdown"
                                    value={selectedValue}
                                    onChange={handleChange}
                                    label="สถานะ"
                                    size='small'
                                >
                                    <MenuItem value={1}>กรุงไทย</MenuItem>
                                    <MenuItem value={2}>ไทยพานิชย์</MenuItem>
                                    <MenuItem value={3}>กสิกร</MenuItem>
                                    <MenuItem value={4}>สรรพากร</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={4}>
                            <FormControl fullWidth >
                                <InputLabel id="dropdown-label" style={{ marginTop: '-7px' }} textAlign='start'>สถานะ</InputLabel>
                                <Select
                                    labelId="dropdown-label"
                                    id="dropdown"
                                    value={selectedValue}
                                    onChange={handleChange}
                                    label="สถานะ"
                                    size='small'
                                >
                                    <MenuItem value={1}>ได้รับข้อมูล</MenuItem>
                                    <MenuItem value={2}>ยังไม่ไดรับ</MenuItem>
                                    

                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>

                <Box m={5}>
                    <Table columns={columns} rows={rows} />
                </Box>
            </Box>
        </>
    );
}

export default IncomeLog;
