import React, { useState } from 'react';
import { Box, TextField, FormControl, FormControlLabel, Radio, RadioGroup, Typography, MenuItem, Select, InputLabel, Grid } from '@mui/material';

function TemplateForm() {
    const [template, setTemplate] = useState({
        type: 'Notification',
        code: '',
        title: '',
        description: '',
        status: 'ใช้งาน',
        subject: '',
        content: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTemplate({ ...template, [name]: value });
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h5" textAlign="center" gutterBottom>แก้ไข Template</Typography>
            <Grid container md={12} spacing={2}>

                <Grid item md={4}>

                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel>ประเภท Template</InputLabel>
                        <Select
                            name="type"
                            value={template.type}
                            onChange={handleInputChange}
                            size='small'
                        >
                            <MenuItem value="Notification">Notification</MenuItem>
                            <MenuItem value="Email">Email</MenuItem>
                            <MenuItem value="SMS">SMS</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item md={8}>

                </Grid>
                {/* รหัส Template */}
                <Grid item md={6}>

                    <TextField
                        label="รหัส Template *"
                        name="code"
                        value={template.code}
                        onChange={handleInputChange}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                        size='small'
                    />
                </Grid>
                {/* ชื่อ Template */}
                <Grid item md={6}>

                    <TextField
                        label="ชื่อ Template *"
                        name="title"
                        value={template.title}
                        onChange={handleInputChange}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                        size='small'

                    />
                </Grid>
                <Grid item md={12}>

                    {/* คำอธิบาย Template */}
                    <TextField
                        label="คำอธิบาย Template"
                        name="description"
                        value={template.description}
                        onChange={handleInputChange}
                        fullWidth
                        multiline
                        rows={4}
                        sx={{ marginBottom: 2 }}
                        size='small'

                    />
                </Grid>
                {/* สถานะใช้งาน */}
                <Grid item md={12}>

                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <RadioGroup
                            row
                            name="status"
                            value={template.status}
                            onChange={handleInputChange}
                        >
                            <FormControlLabel value="ใช้งาน" control={<Radio />} label="ใช้งาน" />
                            <FormControlLabel value="ไม่ใช้งาน" control={<Radio />} label="ไม่ใช้งาน" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/* หัวข้อ */}
                <Grid item md={12}>

                    <TextField
                        label="หัวข้อ *"
                        name="subject"
                        value={template.subject}
                        onChange={handleInputChange}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                        size='small'

                    />
                </Grid>
                {/* เนื้อหา */}
                <Grid item md={12}>

                    <TextField
                        label="เนื้อหา *"
                        name="content"
                        value={template.content}
                        onChange={handleInputChange}
                        fullWidth
                        multiline
                        rows={4}
                        sx={{ marginBottom: 2 }}
                        size='small'

                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default TemplateForm;
