import React, { useState } from 'react';
import { Grid, TextField, FormControl, InputLabel, MenuItem, Select, Box, Button } from '@mui/material';

function InterestCalcul() {
    const [selectedValue, setSelectedValue] = useState('');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const fields1 = [
        { label: "ประเภทเบี้ยปรับ *" },
        { label: "รหัสอัตราดอกเบี้ยสูงสุด *" },
        { label: "Spread Rate *" },
        { label: "อัตราดอกเบี้ยสูงสุด *" },
        { label: "ยอดเงินที่นำมาปรับ *" },



    ];
    return (
        <>
            <Grid container md={6} mb={5}>
                <Grid item md={4}>
                    <FormControl fullWidth>
                        <InputLabel id="dropdown-label" style={{ marginTop: '-7px' }}>
                            บัญชีเงินกู้กยศ
                        </InputLabel>
                        <Select
                            labelId="dropdown-label"
                            id="dropdown"
                            value={selectedValue}
                            onChange={handleChange}
                            label="สถานะ"
                            size="small"
                        >
                            <MenuItem value={1}>บัญชีเงินกู้กยศ</MenuItem>
                            <MenuItem value={2}>บัญชีเงินกู้กรอ</MenuItem>
                            <MenuItem value={3}>บัญชีเงินพรบ 60</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Box style={{backgroundColor:"#F0F0F0" ,padding:'20px'}}>
                <Grid container spacing={4}>
                <Grid item md={6}>
                    <TextField
                        label="ระยะเวลาที่ไม่คิดเบี้ยปรับ *"
                        defaultValue=""
                        size="small"
                        sx={{ fontSize: '16px' }}
                        fullWidth
                    />
                </Grid>
                <Grid item md={6}>
                    <TextField
                        label="คิดเบี้ยปรับย้อนหลังจากวันที่ครบกำหนดชำระ *"
                        defaultValue=""
                        size="small"
                        sx={{ fontSize: '16px' }}
                        fullWidth
                    />
                </Grid>
                </Grid>
            </Box>

            <TextFieldGrid fields={fields1} subText="มีผลต่อทุกบัญชี ตามประเภทบัญชีเงินกู้" />











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
                        backgroundColor: "#A0A0A0",
                    }}
                    variant="contained"

                >
                    ล้าง
                </Button>
            </Box>
        </>
    );
}

export function TextFieldGrid({ fields, subText }) {


    return (
        <Box m={3}>
            <div style={{ backgroundColor: '#D1E7FB', padding: '5px', color: '#6C6C6C', marginBottom: '10px' }}>
                {subText}
            </div>
            <Grid container spacing={2}>
                {fields.map((field, index) => (
                    <Grid item md={4} key={index}>
                        <TextField
                            id={`field-${index}`}
                            label={field.label}
                            defaultValue=""
                            size="small"
                            sx={{ fontSize: '16px' }}
                            fullWidth
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default InterestCalcul;
