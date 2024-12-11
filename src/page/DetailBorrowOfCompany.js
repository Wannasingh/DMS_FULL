import React from 'react';
import { Box, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import TabEmployer from '../components/TabEmployer'
import Subheader from '../components/Subheader'
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import TableDBOC from '../components/Table'
import VisibilityIcon from '@mui/icons-material/Visibility';

function DetailBorrowOfCompany() {
    const location = useLocation();
    const { name, codeID, tel, email, status, nCompany, quantity } = location.state || {};
    const navigate = useNavigate();

    const handleTableClick = (row) => {
        console.log('Selected Row:', row);
        navigate('/DetailBorrow15', {
            state: {
                id: row.id,
                name: row.name,
                codeID: row.codeID,
                LastPayment: row.LastPayment,
                Position: row.Position,
                Debt: row.Debt,
                FreeTime: row.FreeTime,

            }
        });
    };

    const handleManageClick = () => {
        navigate('/ManageEmployer'
            , {
                state: {
                    // id: row.id,
                    name: name,
                    codeID: codeID,
                    tel: tel,
                    email: email,
                    status: status,
                    nCompany: nCompany,
                    quantity: quantity,
                    // status1: status1
                }
            }
        )
    };

    const columns = [
        { header: 'รหัสบัตรประชาชน', field: 'codeID' },
        { header: 'ชื่อ-นามสกุล', field: 'name' },
        { header: 'ชำระครั้งล่าสุด', field: 'LastPayment' },
        { header: 'ตำแหน่ง', field: 'Position' },
        { header: 'ยอดหนี้', field: 'Debt' },
        { header: 'ช่วงว่าง', field: 'FreeTime' },
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
        }
    
    
    ];
    const rows = [
        { id: '1', codeID: '1910000000000', name: 'สุภาวดี สวยดี', LastPayment: '12/01/2567', Position: 'HR', Debt: '3,000', FreeTime: '' },
        { id: '2', codeID: '1910000000001', name: 'ฤดี สวยดี', LastPayment: '12/01/2567', Position: 'HR', Debt: '3,000', FreeTime: '' },
        { id: '3', codeID: '1910000000002', name: 'ฤทัย สวยดี', LastPayment: '12/01/2567', Position: 'HR', Debt: '3,000', FreeTime: '' },
        { id: '4', codeID: '1910000000003', name: 'อรทัย สวยดี', LastPayment: '12/01/2567', Position: 'โปรแกรมเมอร์', Debt: '3,000', FreeTime: '' },
        { id: '5', codeID: '1910000000003', name: 'อรทัย สวยดี', LastPayment: '12/01/2567', Position: 'บัญชี', Debt: '3,000', FreeTime: '' },
        { id: '6', codeID: '1910000000003', name: 'อรทัย สวยดี', LastPayment: '12/01/2567', Position: 'บัญชี', Debt: '3,000', FreeTime: '' },
        { id: '7', codeID: '1910000000003', name: 'อรทัย สวยดี', LastPayment: '12/01/2567', Position: 'HR', Debt: '3,000', FreeTime: '' },
        { id: '8', codeID: '1910000000003', name: 'อรทัย สวยดี', LastPayment: '12/01/2567', Position: 'โปรแกรมเมอร์', Debt: '3,000', FreeTime: '' },
        { id: '9', codeID: '1910000000003', name: 'สุดใจ สวยดี', LastPayment: '12/01/2567', Position: 'บัญชี', Debt: '3,000', FreeTime: '' },
        { id: '10', codeID: '1910000000003', name: 'อรทัย สวยดี', LastPayment: '12/01/2567', Position: 'บัญชี', Debt: '3,000', FreeTime: '' },
        { id: '11', codeID: '1910000000003', name: 'สุดใจ สวยดี', LastPayment: '12/01/2567', Position: 'โปรแกรมเมอร์', Debt: '3,000', FreeTime: '' },
    ];

    const DetailRow = ({ label, value }) => {
        return (
            <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }} textAlign='left'>
                <Typography>
                    <strong>{label}</strong>
                </Typography>
                <Typography textAlign='start'>{value}</Typography>
            </Box>
        );
    };

    return (
        <>
            <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 10, backgroundColor: '#fff' }}>
                <Subheader textHeader="บริหารจัดการข้อมูลผู้กู้" />
            </Box>
            <Box sx={{ p: 3, mt: 10 }}>
                <Box
                    sx={{
                        p: "40px 120px",
                        mb: 2,
                        border: '1px solid #ccc',
                        borderRadius: 2,
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} textAlign="center">
                            <Typography variant="h6">รายชื่อพนักงานที่อยู่ในระบบ กยศ</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <DetailRow
                                label="เลขประจำตัวผู้เสียภาษีอากร:"
                                value="1910000000000"
                            />
                            <DetailRow
                                label="ชื่อองค์กร:"
                                value="สมฤทัย โภชนาการ จำกัด"
                            />
                            <DetailRow
                                label="ที่อยู่:"
                                value="4 ซอยรามอินทรา 5 แยก13"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} spacing={12}>
                            <DetailRow
                                label="เบอร์โทร:"
                                value="02 345 6789"
                            />
                            <DetailRow
                                label="Email:"
                                value="test@gmail.com"
                            />
                            <DetailRow
                                label="ประเภทบริษัท:"
                                value="บริษัทเอกชน"
                            />
                             <DetailRow
                                label="การมีหน้าที่หักเงินนำส่ง:"
                                value={status}
                            />
                        </Grid>
                        <Grid item xs={12} textAlign="right">
                        <Button size='small' onClick={handleManageClick} >แก้ไข</Button>
                        </Grid>
                    </Grid>
                </Box>
                <TableDBOC columns={columns} rows={rows} />
            </Box>
        </>
    );
}

export default DetailBorrowOfCompany;
