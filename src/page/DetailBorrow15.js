import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Grid,
} from '@mui/material';

function DetailBorrow15() {
  const userData = {
    name: 'สุดใจ สวยดี',
    username: 'test1234',
    email: 'test@gmail.com',
    phone: 'xxx-xxx-xxxx',
    status: 'ครบกำหนดชำระ',
    accountStatus: 'ชำระหนี้เป็นปกติ',
    address: '4 ซอยรามอินทรา 5 แยก 13 ถนนรามอินทรา เขตอนุสาวรีย์ เขตบางเขน กรุงเทพมหานคร 10220',
    outstandingDebt: '300,000,000',
  };

  const paymentHistory = [
    { date: '5 ก.ค. 2567', amount: '200', remaining: '3,534.00', ref: '7709080000000056865' },
    { date: '5 ก.ค. 2566', amount: '200', remaining: '3,534.00', ref: '7709080000000056865' },
    { date: '5 ก.ค. 2565', amount: '200', remaining: '3,534.00', ref: '7709080000000056865' },
    { date: '5 ก.ค. 2564', amount: '200', remaining: '3,534.00', ref: '7709080000000056865' },
    { date: '5 ก.ค. 2563', amount: '200', remaining: '3,534.00', ref: '7709080000000056865' },
    { date: '5 ก.ค. 2562', amount: '200', remaining: '3,534.00', ref: '7709080000000056865' },
    { date: '5 ก.ค. 2561', amount: '200', remaining: '3,534.00', ref: '7709080000000056865' },
    { date: '5 ก.ค. 2560', amount: '200', remaining: '3,534.00', ref: '7709080000000056865' },
    { date: '5 ก.ค. 2559', amount: '200', remaining: '3,534.00', ref: '7709080000000056865' },
    { date: '5 ก.ค. 2558', amount: '200', remaining: '3,534.00', ref: '7709080000000056865' },
    { date: '5 ก.ค. 2557', amount: '200', remaining: '3,534.00', ref: '7709080000000056865' },
    { date: '5 ก.ค. 2556', amount: '200', remaining: '3,534.00', ref: '7709080000000056865' },
    { date: '5 ก.ค. 2555', amount: '200', remaining: '3,534.00', ref: '7709080000000056865' },

  ];

  return (
    <Box sx={{ padding: 4 }}>
      {/* User Info */}
      <Box m={5}>
        <Grid container spacing={10} md={12}>
          <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              src="./hirono"
              alt={userData.name}
              sx={{ width: 250, height: 250 }}
            />
          </Grid>
          <Grid item xs={12} md={8} sx={{ paddingLeft: 5 }}>
            <Typography variant="h5" fontWeight="bold">
              ข้อมูลส่วนตัว
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <Typography>ชื่อ-สกุล: {userData.name}</Typography>
              <Typography>ชื่อผู้ใช้งาน: {userData.username}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography>Email: {userData.email}</Typography>
              <Typography>เบอร์โทร: {userData.phone}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography>
                สถานะลูกหนี้:{' '}
                <Typography component="span" color="primary">
                  {userData.status}
                </Typography>
              </Typography>
              <Typography>
                สถานะบัญชี:{' '}
                <Typography component="span" sx={{ color: 'green' }}>
                  {userData.accountStatus}
                </Typography>
              </Typography>
            </Box>
            <Typography>ที่อยู่: {userData.address}</Typography>
            <Typography variant="h6" color="error" fontWeight="bold">
              ยอดหนี้คงค้าง (บาท): {userData.outstandingDebt}
            </Typography>
          </Grid>
        </Grid>

      </Box>
      <Typography variant="h6" fontWeight="bold" marginBottom={2} color='#1D4F73'>
        รายการบัญชีการชำระเงิน
      </Typography>
      <Typography marginBottom={2} color='#a6a3a3'>ข้อมูลล่าสุดเมื่อวันที่: 4 ก.ย. 2567</Typography>
    
      <Box sx={{ maxHeight: 400, overflowY: 'auto', padding: 2 }}>
      {paymentHistory.map((payment, index) => (
        <Box
          key={index}
          sx={{
            border: '1px solid #ddd',
            borderRadius: 2,
            marginBottom: 2,
            overflow: 'hidden', 
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f5f5f5',
              padding: 1.5,
              fontWeight: 'bold',
              borderBottom: '1px solid #ddd',
            }}
          >
            <Typography sx={{ flex: 1, textAlign: 'left' }}>วันที่ชำระ</Typography>
            <Typography sx={{ flex: 1, textAlign: 'center' }}>ยอดชำระ (บาท)</Typography>
            <Typography sx={{ flex: 1, textAlign: 'center' }}>ยอดเงินคงเหลือ (บาท)</Typography>
            <Typography sx={{ flex: 1, textAlign: 'right' }}>เลขอ้างอิง</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: 1.5,
              backgroundColor: '#fff',
            }}
          >
            <TableCellContent text={payment.date} align="left" hasBorderRight />
            <TableCellContent text={payment.amount} />
            <TableCellContent text={payment.remaining} />
            <TableCellContent text={payment.ref} align="right" />
          </Box>
        
        </Box>
      ))}
    </Box>
    </Box>
  );
}

export default DetailBorrow15;

function TableCellContent({ text, align = 'center', hasBorderRight = false }) {
  return (
    <Typography
      sx={{
        flex: 1,
        textAlign: align,
        borderRight:'1px solid #ddd',  // เส้นแนวตั้ง
        paddingRight: align === 'right' ? 2 : 0, // เพิ่มช่องว่างด้านขวา
      }}
    >
      {text}
    </Typography>
  );
}