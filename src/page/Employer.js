import React, { useState,useRef } from 'react';
import Subheader from '../components/Subheader';
import { Box, Grid, TextField, FormControl, InputLabel, MenuItem, Select, Button, Menu,Tooltip } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';

import Table from '../components/Table'
import { useLocation, useNavigate } from 'react-router-dom';

function Employer() {
    const [selectedValue, setSelectedValue] = useState('');
    const navigate = useNavigate();
    const componentRef = useRef();

    const options = [
        'PDF',
        'exel',
        'CSV',
    ];

    const ITEM_HEIGHT = 48;
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleTableClick = (row) => {
        console.log('Selected Row:', row);
        navigate('/detailEmployer', {
            state: {
                id: row.id,
                name: row.name,
                codeID: row.codeID,
                tel: row.tel,
                email: row.email,
                status: row.status,
                nCompany: row.nCompany,
                quantity: row.quantity
            }
        });
    };
    const handlePrint = () => {
        if (componentRef.current) {
            const printableContent = componentRef.current.cloneNode(true);
    
            const managementHeader = Array.from(printableContent.querySelectorAll("th")).find(
                (th) => th.textContent.trim() === "การจัดการ"
            );
            if (managementHeader) managementHeader.style.display = "none";
    
            const columnIndex = Array.from(managementHeader.parentNode.children).indexOf(managementHeader);
            Array.from(printableContent.querySelectorAll(`tr`)).forEach((row) => {
                const cell = row.children[columnIndex];
                if (cell) cell.style.display = "none"; // ซ่อนเซลล์ในคอลัมน์นี้
            });
    
            const printWindow = window.open("", "_blank");
            printWindow.document.open();
            printWindow.document.write(`
                <html>
                    <head>
                        <title>พิมพ์ข้อมูล</title>
                        <style>
                            body { font-family: Arial, sans-serif; margin: 20px; }
                            table { width: 100%; border-collapse: collapse; }
                            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                            th { background-color: #f4f4f4; }
                        </style>
                    </head>
                    <body>
                        ${printableContent.innerHTML}
                    </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        } else {
            console.error('Error: componentRef is not attached to any DOM element.');
        }
    };

    const handleTableClick2 = (row) => {
        console.log('Selected Row:', row);
        navigate('/DetailBorrowOfCompany', {
            state: {
                id: row.id,
                name: row.name,
                codeID: row.codeID,
                tel: row.tel,
                email: row.email,
                status: row.status,
                nCompany: row.nCompany,
                quantity: row.quantity
            }
        });
    };

    const columns = [
        { header: 'เลขผู้เสียภาษี', field: 'codeID' },
        { header: 'ชื่อ-นามสกุล', field: 'name' },
        { header: 'ชื่อสถานประกอบการ', field: 'nCompany' },
        { header: 'เบอร์โทร', field: 'tel' },
        { header: 'อีเมล', field: 'email' },
        {
            header: 'จำนวนผู้กู้',
            field: 'quantity',
            render: (_, row) => (
                <Button variant="text" onClick={() => handleTableClick2(row)}>
                    {row.quantity}
                </Button>
            ),
        },
        { header: 'สถานะ', field: 'status' },

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
                }} onClick={() => handleTableClick(row)}><VisibilityIcon fontSize="small" /></button>
            ),
        }];
    const rows = [
        { id: '1', codeID: '1910000000000', name: 'สุภาวดี สวยดี', nCompany: 'สมฤทัย โภชนาการ จำกัด', tel: '080-0808-808', email: 'test123@gmail.com', quantity: '23', status: 'เปิดใช้งาน' },
        { id: '2', codeID: '1910000000001', name: 'ฤดี สวยดี', nCompany: 'สมฤทัย โภชนาการ1 จำกัด', tel: '080-0808-808', email: 'test123@gmail.com', quantity: '22', status: 'เปิดใช้งาน' },
        { id: '3', codeID: '1910000000002', name: 'ฤทัย สวยดี', nCompany: 'สมฤทัย โภชนาการ2 จำกัด', tel: '080-0808-808', email: 'test123@gmail.com', quantity: '21', status: 'เปิดใช้งาน' },
        { id: '4', codeID: '1910000000003', name: 'อรทัย สวยดี', nCompany: 'สมฤทัย โภชนาการ3 จำกัด', tel: '080-0808-808', email: 'test123@gmail.com', quantity: '25', status: 'เปิดใช้งาน' },
        { id: '5', codeID: '1910000000003', name: 'อรทัย สวยดี', nCompany: 'สมฤทัย โภชนาการ4 จำกัด', tel: '080-0808-808', email: 'test123@gmail.com', quantity: '26', status: 'เปิดใช้งาน' },
        { id: '6', codeID: '1910000000003', name: 'อรทัย สวยดี', nCompany: 'สมฤทัย โภชนาการ5 จำกัด', tel: '080-0808-808', email: 'test123@gmail.com', quantity: '64', status: 'เปิดใช้งาน' },
        { id: '7', codeID: '1910000000003', name: 'อรทัย สวยดี', nCompany: 'สมฤทัย โภชนาการ6 จำกัด', tel: '080-0808-808', email: 'test123@gmail.com', quantity: '46', status: 'เปิดใช้งาน' },
        { id: '8', codeID: '1910000000003', name: 'อรทัย สวยดี', nCompany: 'สมฤทัย โภชนาการ7 จำกัด', tel: '080-0808-808', email: 'test123@gmail.com', quantity: '44', status: 'เปิดใช้งาน' },
        { id: '9', codeID: '1910000000003', name: 'อรทัย สวยดี', nCompany: 'สมฤทัย โภชนาการ8 จำกัด', tel: '080-0808-808', email: 'test123@gmail.com', quantity: '66', status: 'เปิดใช้งาน' },
        { id: '10', codeID: '1910000000003', name: 'อรทัย สวยดี', nCompany: 'สมฤทัย โภชนาการ9 จำกัด', tel: '080-0808-808', email: 'test123@gmail.com', quantity: '34', status: 'เปิดใช้งาน' },
        { id: '11', codeID: '1910000000003', name: 'อรทัย สวยดี', nCompany: 'สมฤทัย โภชนาการ จำกัด', tel: '080-0808-808', email: 'test123@gmail.com', quantity: '67', status: 'เปิดใช้งาน' },


    ];
    return (
        <>
            <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 10, backgroundColor: '#fff' }}>
                <Subheader textHeader='บริหารจัดการข้อมูลนายจ้าง' />
            </Box>
            <Box style={{ marginTop: '50px' }}>
                <Box sx={{ width: '100%', right: 0, margin: 'auto', }} textAlign='end' >

                    <Grid container md={11} spacing={5} sx={{ margin: '0 auto', right: '0' }} textAlign="end">
                        {/* <Grid item md={4}>

                            <TextField
                                id="outlined"
                                label="เลขผู้เสียภาษี/ชื่อสถานประกอบการ"
                                defaultValue=""
                                size='small'
                                sx={{ fontSize: '16px' }}

                            />
                        </Grid>
                        <Grid item md={4}>
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
                        </Grid> */}
                        <Grid item md={12} textAlign="end">
                            <Button  onClick={handlePrint} style={{ borderRadius: "100px", backgroundColor: "#1530A8" }} variant="contained">พิมพ์ <PrintIcon style={{ marginLeft: '10px' }} /></Button>
                        </Grid>
                        {/* <Grid item md={6} textAlign="end">
                            <Tooltip title="Download Options">
                                <IconButton
                                    aria-label="download"
                                    id="long-button"
                                    aria-controls={open ? 'long-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                    style={{
                                        backgroundColor: '#f0f0f0',
                                        border: '1px solid #ddd',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    <DownloadIcon fontSize="Medium " style={{ color: '#1976d2' }} />
                                </IconButton>
                            </Tooltip>

                            <Menu
                                id="long-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '20ch',
                                        borderRadius: '10px',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                                    },
                                }}
                            >
                                {options.map((option) => (
                                    <MenuItem
                                        key={option}
                                        onClick={handleClose}
                                        style={{
                                            fontSize: '14px',
                                            padding: '10px 20px',
                                            borderBottom: '1px solid #f0f0f0',
                                        }}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Grid> */}
                    </Grid>
                </Box>

                {/* </Grid> */}
                <Box m={5} ref={componentRef}>
                    <Table columns={columns} rows={rows} />
                </Box>
            </Box>
        </>
    );
}

export default Employer;
