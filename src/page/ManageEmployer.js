import React, { useState } from 'react';
import {
    Box,
    Button,
    Stack,
    Card,
    CardActions,
    Grid,
    IconButton, FormControl, InputLabel, Select, MenuItem, Typography, TextField, OutlinedInput
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Subheader from '../components/Subheader';
import Popup from '../components/Popup';

export default function ManageBorrower() {
    const location = useLocation();
    const navigate = useNavigate();

      const { id } = location.state || {};
      const [codeID, setcodeID] = React.useState(location.state?.codeID || '');

      const [name, setName] = React.useState(location.state?.name || '');
      const [email, setEmail] = React.useState(location.state?.Email || '');
      const [tel, setTel] = React.useState(location.state?.Tel || '');
      const [nCompany, setnCompany] = React.useState(location.state?.nCompany || '');
      const [quantity, setQuantity] = React.useState(location.state?.quantity || '');
      const [status1, setStatus1] = React.useState(location.state?.status1 || '');

      
    const [status, setStatus] = React.useState(location.state?.status || '');
    const [openPopup, setOpenPopup] = React.useState(false);

  console.log(nCompany);
    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    const handleCancel = () => {
        navigate(-1); // กลับไปหน้าก่อนหน้า
    };


    const handlePopupOpen = () => {
        setOpenPopup(true);
    };

    const handlePopupClose = () => {
        setOpenPopup(false);
    };

    const handleSave = () => {
        navigate('/Employer');
        console.log('บันทึกข้อมูล:');
      };
    

    const userInfo = [
        { label: "ชื่อองค์กร", value: nCompany },
        { label: "เบอร์โทรศัพท์", value: tel },
        { label: "อีเมล", value: email },
        { label: "สถานะบัญชี", value: "ปิดบัญชีชำระ" },
        { label: "ที่อยู่", value: "4 ซ.รามอินทรา 5 แยก13 ถนน รามอินทรา แขวงอนุสาวรีย์ เขตบางเขน กรุงเทพมหานคร 10220" }
      ];
    return (
        <>
            <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 10, backgroundColor: '#fff' }}>
                <Subheader textHeader="บริหารจัดการข้อมูลผู้กู้" />
            </Box>
            <Box sx={{ flex: 1, width: '100%', marginTop: '60px' }}>
                <Stack
                    spacing={4}
                    sx={{
                        maxWidth: '1000px',
                        mx: 'auto',
                        px: { xs: 2, md: 6 },
                        py: { xs: 2, md: 3 },
                    }}
                >
                    <Card style={{ padding: '2% 10%' }}>
                        <Typography variant="h6" fontWeight="bold" marginBottom={2}>ข้อมูลสถานประกอบการ</Typography>


                        <Grid container spacing={2} alignItems="center">
                            <Grid item md={6}>
                                <div style={{ margin: '20px auto' }}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="outlined-required"
                                        label="เลขประจำตัวผู้เสียภาษีอากร"
                                        defaultValue={codeID}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        size='small'
                                        disabled
                                    />
                                </div>

                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="outlined-required"
                                    label="ชื่อองค์กร"
                                    defaultValue={nCompany}
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    size='small'
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item md={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="outlined-required"
                                    label="สาขา"
                                    defaultValue="รามอินทรา"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    size='small'
                                />
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="outlined-required"
                                    label="ประเภทบริษัท"
                                    defaultValue="บริษัทเอกชน"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    size='small'
                                />


                            </Grid>
                            <Grid item md={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>การมีหน้าที่หักเงินนำส่ง</InputLabel>
                                    <Select
                                        value={status1}
                                        onChange={handleChange}
                                        label="การมีหน้าที่หักเงินนำส่ง"
                                        size='small'
                                        input={<OutlinedInput label="การมีหน้าที่หักเงินนำส่ง" />}
                                    >
                                        <MenuItem value={1}>มี</MenuItem>
                                        <MenuItem value={2}>ไม่มี</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="outlined-required"
                                    label="จำนวนลูกหนี้ในองค์กร(คน)"
                                    defaultValue={quantity}
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    size='small'
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="outlined-required"
                                    label="ที่อยู่"
                                    defaultValue=" 4 ซอยรามอินทรา 5 แยก 13 ถนนรามอินทรา แขวงอนุสาวรีย์ เขตบางเขน กรุงเทพมหานคร 10220"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    size='small'
                                />
                            </Grid>
                        </Grid>

                        <CardActions sx={{ justifyContent: 'flex-end', pt: 2 }}>
                            <Button
                                size="small"
                                variant="outlined"
                                style={{ borderRadius: '100px', backgroundColor: '#980E20', color: '#ffffff' }}
                                onClick={handleCancel}
                            >
                                ยกเลิก
                            </Button>
                            <Button
                                size="small"
                                variant="contained"
                                style={{ borderRadius: '100px', backgroundColor: '#1530A8' }}
                                onClick={handlePopupOpen}
                            >
                                บันทึก
                            </Button>

                        </CardActions>
                    </Card>
                </Stack>
                <Popup open={openPopup} handleClose={handlePopupClose} handleSave={handleSave}  userDetails={userInfo}  />
                </Box>
        </>
    );
}
