import React, { useState } from 'react';
import Subheader from '../components/Subheader';
import { Box, Button, Grid } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

import Table from '../components/Table'
import { useLocation, useNavigate } from 'react-router-dom';

function IncentiveMeasures() {
    const navigate = useNavigate();

 

    const handleClickEdit = (row) => {
        console.log('Selected Row:', row);
        navigate('/EditincentiveMeasures', {
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


    const handleClickAdd = () => {
        navigate('/AddincentiveMeasures');
    };


    const columns = [
        { header: 'เลขที่ประกาศ', field: 'codeID' },
        { header: 'หัวข้อประกาศ', field: 'title' },
        { header: 'รายละเอียด', field: 'detail' },
        { header: 'วันที่ประกาศ', field: 'incentiveDate' },
        { header: 'สถานะ', field: 'status' },
        { header: 'วันที่สร้างรายการ', field: 'createdDate' },
        { header: 'วันที่หมดอายุรายการ', field: 'expirationDate' },
        { header: 'ผู้ทำรายการ', field: 'createdBy' },


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
                }} onClick={() => handleClickEdit(row)}><VisibilityIcon fontSize="small" /></button>
            ),
        }];
    const rows = [
        { id: '1', codeID: '1910000000000', title: 'ลดหนี้ 10% ทันที!!', detail: 'ลดหนี้ 10%', incentiveDate: '25/11/2567', status: 'เปิดใช้งาน', createdDate: '25/11/2567', expirationDate: '25/11/2567', createdBy: 'สุดใจ สวยดี' },
        { id: '2', codeID: '1910000000000', title: 'ลดหนี้ 10% ทันที!!', detail: 'ลดหนี้ 10%', incentiveDate: '25/11/2567', status: 'เปิดใช้งาน', createdDate: '25/11/2567', expirationDate: '25/11/2567', createdBy: 'สุดใจ สวยดี' },
        { id: '3', codeID: '1910000000000', title: 'ลดหนี้ 10% ทันที!!', detail: 'ลดหนี้ 10%', incentiveDate: '25/11/2567', status: 'เปิดใช้งาน', createdDate: '25/11/2567', expirationDate: '25/11/2567', createdBy: 'สุดใจ สวยดี' },
        { id: '4', codeID: '1910000000000', title: 'ลดหนี้ 10% ทันที!!', detail: 'ลดหนี้ 10%', incentiveDate: '25/11/2567', status: 'เปิดใช้งาน', createdDate: '25/11/2567', expirationDate: '25/11/2567', createdBy: 'สุดใจ สวยดี' },
        { id: '5', codeID: '1910000000000', title: 'ลดหนี้ 10% ทันที!!', detail: 'ลดหนี้ 10%', incentiveDate: '25/11/2567', status: 'เปิดใช้งาน', createdDate: '25/11/2567', expirationDate: '25/11/2567', createdBy: 'สุดใจ สวยดี' },
        { id: '6', codeID: '1910000000000', title: 'ลดหนี้ 10% ทันที!!', detail: 'ลดหนี้ 10%', incentiveDate: '25/11/2567', status: 'เปิดใช้งาน', createdDate: '25/11/2567', expirationDate: '25/11/2567', createdBy: 'สุดใจ สวยดี' },

    ];
    return (
        <>
            <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 10, backgroundColor: '#fff' }}>
                <Subheader textHeader='มาตราการจูงใจ' />
            </Box>
            <Box style={{ marginTop: '80px' }}>

                <Box style={{ margin: '80px 40px 40px',}}textAlign="end">
                    {/* <Grid item md={1}> */}
                        <Button
                            style={{
                                borderRadius: "100px",
                                backgroundColor: "#1530A8",
                            }}
                            variant="contained"
                          onClick={handleClickAdd}
                        >
                            เพิ่ม ข่าวสาร
                        </Button>
                    {/* </Grid> */}

                </Box>
                {/* <Box sx={{ width: '100%', right: 0, margin: 'auto', }} textAlign='end' >

                    <Grid container md={8} spacing={5} sx={{ margin: '0 auto', right: '0' }}>
                        <Grid item md={4}>

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
                        </Grid>
                        <Grid item md={2}>
                            <Button style={{ borderRadius: "100px", backgroundColor: "#1530A8" }} variant="contained">พิมพ์ <PrintIcon style={{ marginLeft: '10px' }} /></Button>
                        </Grid>
                        <Grid item md={2}>
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
                        </Grid>
                    </Grid>
                </Box> */}

                {/* </Grid> */}
                <Box m={5}>
                    <Table columns={columns} rows={rows} />
                </Box>
            </Box>
        </>
    );
}

export default IncentiveMeasures;
