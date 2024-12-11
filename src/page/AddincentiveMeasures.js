import React, { useState } from 'react';
import Subheader from '../components/Subheader';
import { Box, Typography, Grid, TextField, RadioGroup, FormControlLabel, Radio, FormControl, Button } from '@mui/material';

function AddIncentiveMeasures() {
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const [inputList, setInputList] = useState([
        { accountCode: "", accountName: "", status: "ใช้งาน" },
    ]);

    const handleInputChange1 = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // ฟังก์ชันในการจัดการการเลือกไฟล์
    const handleFileChange = (e, index) => {
        const files = Array.from(e.target.files);
        const list = [...inputList];
        list[index].attachedFiles = files;  // เก็บไฟล์ที่เลือกไว้ใน state
        setInputList(list);
    };
    return (
        <>
            <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 10, backgroundColor: '#fff' }}>
                <Subheader textHeader='มาตรการจูงใจ' />
            </Box>


            <Box style={{ margin: '80px 0' }}>
                <Typography variant='h5' textAlign="center">เพิ่มประกาศ</Typography>
                <Grid container md={10} spacing={5} textAlign="center" style={{ margin: "auto" }}>

                    <Grid item md={6}>
                        <TextField
                            id="outlined"
                            label="รหัสประกาศ *"
                            defaultValue=""
                            size='small'
                            sx={{ fontSize: '16px' }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            id="outlined"
                            label="ชื่อประกาศ *"
                            defaultValue=""
                            size='small'
                            sx={{ fontSize: '16px' }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            id="outlined"
                            label="คำอธิบายประกาศ *"
                            defaultValue=""
                            size='small'
                            sx={{ fontSize: '16px' }}
                            fullWidth
                            multiline
                        />
                    </Grid>

                    <Grid item md={12} textAlign="left">
                        <Typography  >สถานะใช้งานประกาศ</Typography>

                        <FormControl>
                            <RadioGroup
                                row
                                name="status"
                                value={inputList[0].status}
                                onChange={(e) => handleInputChange(e, 0)}
                            >
                                <FormControlLabel
                                    value="ใช้งาน"
                                    control={<Radio />}
                                    label="ใช้งาน"
                                />
                                <FormControlLabel
                                    value="ไม่ใช้งาน"
                                    control={<Radio />}
                                    label="ไม่ใช้งาน"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            id="outlined"
                            label="หัวข้อประกาศ *"
                            defaultValue=""
                            size='small'
                            sx={{ fontSize: '16px' }}
                            fullWidth

                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            id="outlined"
                            label="เนื้อหาประกาศ *"
                            defaultValue=""
                            size='small'
                            sx={{ fontSize: '16px' }}
                            fullWidth
                            multiline
                        />
                    </Grid>

                    <Grid item md={12}>
                        <Typography variant='body1' textAlign="left" sx={{ fontSize: '16px' }}>
                            แนบไฟล์:
                        </Typography>
                        <input
                            type="file"
                            multiple
                            onChange={(e) => handleInputChange1(e, 0)}
                            style={{ width: '100%' }}
                        />
                    </Grid>
                </Grid>


                <Box sx={{ marginTop: 2, textAlign: "center" }}>
                    <Button
                        style={{
                            borderRadius: "100px",
                            backgroundColor: "#1530A8",
                            marginRight: "10px",
                        }}
                        variant="contained"
                    >
                        บันทึก
                    </Button>
                    <Button
                        style={{
                            borderRadius: "100px",
                        }}
                        variant="contained"
                        color="error"


                    >
                        ยกเลิก
                    </Button>
                </Box>



            </Box>
        </>
    );
}

export default AddIncentiveMeasures;
