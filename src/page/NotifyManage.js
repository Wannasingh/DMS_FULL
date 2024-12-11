import React, { useState } from 'react';
import Subheader from '../components/Subheader.js';
import { Box, Button, Grid } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

import Table from '../components/Table.js'
import { useLocation, useNavigate } from 'react-router-dom';

function IncentiveMeasures() {
    const navigate = useNavigate();

 

    const handleClickEdit = (row) => {
        console.log('Selected Row:', row);
        navigate('/Editnotify', {
            state: {
                id: row.id,
                templateId: row.templateId,
                templateName: row.templateName,
                templateType: row.templateType,
                system: row.system,
                status: row.status,
          
            }
        });
    };


    const handleClickAdd = () => {
        navigate('/Addnotify');
    };


    const columns = [
        { header: 'รหัส Template', field: 'templateId' },
        { header: 'ชื่อ Template', field: 'templateName' },
        { header: 'ประเภท Template', field: 'templateType' },
        { header: 'ระบบ', field: 'system' },
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
                }} onClick={() => handleClickEdit(row)}><VisibilityIcon fontSize="small" /></button>
            ),
        }];
    const rows = [
        { id: '1', templateId: '1910000000000', templateName: 'ติดตามหนี้ที่ผิดนัด1', templateType:'Email',system: 'DMS', status: 'เปิดใช้งาน'},
        { id: '2', templateId: '1910000000000', templateName: 'ติดตามหนี้ที่ผิดนัด1', templateType:'SMS',system: 'DMS',  status: 'เปิดใช้งาน'},
        { id: '3', templateId: '1910000000000', templateName: 'ติดตามหนี้ที่ผิดนัด1', templateType:'Email',system: 'DMS',  status: 'เปิดใช้งาน'},
        { id: '4', templateId: '1910000000000', templateName: 'ติดตามหนี้ที่ผิดนัด1', templateType:'SMS',system: 'DMS',  status: 'เปิดใช้งาน'},
        { id: '5', templateId: '1910000000000', templateName: 'ติดตามหนี้ที่ผิดนัด1', templateType:'Notification',system: 'DMS',  status: 'เปิดใช้งาน'},
        { id: '6', templateId: '1910000000000', templateName: 'ติดตามหนี้ที่ผิดนัด1', templateType:'Email',system: 'DMS', status: 'เปิดใช้งาน'},

    ];
    return (
        <>
            <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 10, backgroundColor: '#fff' }}>
                <Subheader textHeader='จัดการการแจ้งเตือน' />
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
                           เพิ่ม Template  
                        </Button>
                    {/* </Grid> */}

                </Box>
         
                <Box m={5}>
                    <Table columns={columns} rows={rows} />
                </Box>
            </Box>
        </>
    );
}

export default IncentiveMeasures;
