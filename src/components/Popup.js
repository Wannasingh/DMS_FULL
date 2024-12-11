import React from 'react';
import Box from '@mui/material/Box';
import { Modal, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Popup({ open, handleClose, userDetails, handleSave }) {
  const navigate = useNavigate();


  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="popup-title" aria-describedby="popup-description">
      <Box sx={style}>
        <h3 id="popup-title" style={{ textAlign: 'center' }}>ยืนยันการแก้ไขข้อมูล</h3>

        <Grid container spacing={2} style={{ padding: '20px' }}>
          {userDetails.map((detail, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Typography variant="body1">
                <strong>{detail.label} :</strong> {detail.value}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Grid textAlign='center'>
          <Button
            size="small"
            variant="outlined"
            style={{ borderRadius: '100px', backgroundColor: '#980E20', color: '#ffffff', marginRight: '8px' }}
            onClick={handleClose}
          >
            แก้ไข
          </Button>

          <Button
            size="small"
            variant="contained"
            style={{ borderRadius: '100px', backgroundColor: '#1530A8', color: '#ffffff' }}
            onClick={handleSave}
          >
            บันทึก
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
}
