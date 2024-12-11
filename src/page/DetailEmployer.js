import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import TabEmployer from '../components/TabEmployer'
import Subheader from '../components/Subheader'
import { useLocation, useNavigate } from 'react-router-dom';

function UserDetails() {
    const location = useLocation();
    const { name, codeID, tel, email, status, nCompany, quantity, } = location.state || {};
    const navigate = useNavigate();
    const [status1, setStatus1] = React.useState('มี');

    const handleTableClick = () => {
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
                    status1: status1
                }
            }
        );
    };
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
                        p: 2,
                        mb: 2,
                        border: '1px solid #ccc',
                        borderRadius: 2,
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    <Typography variant='h6'>
                        ข้อมูลสถานประกอบการ
                    </Typography>
                    <Grid container md={11} spacing={5} ml={3} mr={3} >
                        <Grid item md={6} >
                            <DetailRow
                                label="เลขประจำตัวผู้เสียภาษีอากร:"
                                value={codeID}
                            />
                            <DetailRow
                                label="ชื่อองค์กร:"
                                value={nCompany}
                            />
                            <DetailRow
                                label="ที่อยู่:"
                                value
                                ="4 ซอยรามอินทรา 5 แยก13"
                            />
                            <DetailRow
                                label="เบอร์โทร:"
                                value={tel}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <DetailRow
                                label="Email:"
                                value={email}
                            />
                            <DetailRow
                                label="ประเภทบริษัท:"
                                value="บริษัทเอกชน"
                            />
                            <DetailRow
                                label="การมีหน้าที่หักเงินนำส่ง:"
                                value={status1}
                            />
                        </Grid>
                    </Grid>
                    <Grid item md={12} textAlign='end'>
                        <Button size='small' onClick={handleTableClick} >แก้ไข</Button>
                    </Grid>
                </Box>
                <TabEmployer />

            </Box>
        </>
    );
}

export default UserDetails;


