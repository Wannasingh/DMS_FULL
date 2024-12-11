import React, { useState } from 'react';
import {
  Box,
  Button,
  Stack,
  Card,
  CardActions,
  Grid,
  IconButton, FormControl, InputLabel, Select, MenuItem, OutlinedInputม, TextField, OutlinedInput
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Subheader from '../components/Subheader';
import Popup from '../components/Popup';
import EditIcon from '@mui/icons-material/Edit';

export default function ManageBorrower() {
  const location = useLocation();
  const navigate = useNavigate();

  const { id } = location.state || {};
  const [name, setName] = React.useState(location.state?.name || '');
  const [email, setEmail] = React.useState(location.state?.Email || '');
  const [tel, setTel] = React.useState(location.state?.Tel || '');
  const [status, setStatus] = React.useState(location.state?.status || '');
  const [openPopup, setOpenPopup] = React.useState(false);
  const [image, setImage] = useState('/hirono.png');



  const userInfo = [
    { label: "ชื่อ-นามสกุล", value: name },
    { label: "เบอร์โทรศัพท์", value: tel },
    { label: "อีเมล", value: email },
    { label: "สถานะลูกหนี้", value: "ปิดบัญชีชำระ" },
    { label: "ที่อยู่", value: "4 ซ.รามอินทรา 5 แยก13 ถนน รามอินทรา แขวงอนุสาวรีย์ เขตบางเขน กรุงเทพมหานคร 10220" }
  ];


  const handleSave = () => {
    navigate('/Borrower');
    console.log('บันทึกข้อมูล:');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleCancel = () => {
    navigate(-1); 
  };


  const handlePopupOpen = () => {
    setOpenPopup(true);
  };

  const handlePopupClose = () => {
    setOpenPopup(false);
  };

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
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #ddd',
                  position: 'relative',
                }}
              >
                <img
                  src={image || 'https://via.placeholder.com/150'}
                  alt="Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* ปุ่มแก้ไข */}
                <IconButton
                  component="label"
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    borderRadius: '50%',
                    padding: '5px',
                  }}
                >
                  <EditIcon style={{ fontSize: '18px', color: '#000' }} />
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </IconButton>
              </div>
            </Grid>
            <Grid container spacing={2} alignItems="center">
              <Grid item md={2}>
                <div style={{ margin: '20px auto' }}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>คำนำหน้า</InputLabel>
                    <Select
                      value={status}
                      onChange={handleChange}
                      label="คำนำหน้า"
                      size='small'
                      input={<OutlinedInput label="คำนำหน้า" />}
                    >
                      <MenuItem value="นาย">นาย</MenuItem>
                      <MenuItem value="นาง">นาง</MenuItem>
                      <MenuItem value="นางสาว">นางสาว</MenuItem>
                    </Select>
                  </FormControl>
                </div>

              </Grid>
              <Grid item md={5}>
                <div style={{ margin: '20px auto' }}>

                  <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="ชื่อ - นามสกุล"
                    defaultValue={name}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size='small'
                  />
                </div>

              </Grid>
              <Grid item md={5}>
                <TextField
                  required
                  fullWidth
                  id="outlined-required"
                  label="ชื่อบัญชีผู้ใช้"
                  defaultValue="eieiza"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size='small'
                />


              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
              <Grid item md={3}>
                <div style={{ margin: '20px auto' }}>

                  <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="เบอร์โทร"
                    defaultValue={tel}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size='small'
                  />
                </div>

              </Grid>

              <Grid item md={3}>
                <TextField
                  required
                  fullWidth
                  id="outlined-required"
                  label="อีเมล"
                  defaultValue={email}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size='small'
                />


              </Grid>
              <Grid item md={3}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>สถานะลูกหนี้</InputLabel>
                  <Select
                    value={status}
                    onChange={handleChange}
                    label="คำนำหน้า"
                    size='small'
                    input={<OutlinedInput label="คำนำหน้า" />}
                  >
                    <MenuItem value={1}>ครบกำหนดชำระ</MenuItem>
                    <MenuItem value={2}>ลูกหนี้ไก่ลเกลี่ย</MenuItem>
                    <MenuItem value={3}>ลูกหนี้ในองค์กร</MenuItem>
                    <MenuItem value={4}>ลูกหนี้เสียชีวิต</MenuItem>
                    <MenuItem value={4}>ลูกหนี้พิการ</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={3}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>สถานะบัญชี</InputLabel>
                  <Select
                    value={status}
                    onChange={handleChange}
                    label="คำนำหน้า"
                    size='small'
                    input={<OutlinedInput label="คำนำหน้า" />}
                  >
                    <MenuItem value={1}>ชำระหนี้เป็นปกติ</MenuItem>
                    <MenuItem value={2}>ปิดบัญชีค้างชำระ</MenuItem>

                  </Select>
                </FormControl>
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
        <Popup open={openPopup} handleClose={handlePopupClose} userDetails={userInfo}  handleSave={handleSave}/>
        </Box>
    </>
  );
}
