import React, { useRef } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function Test2() {
  const componentRef = useRef();

  const rows = [
    { id: '1910000000000', name: 'สุดใจ สวยดี', status: 'รออนุมัติ' },
    { id: '1910000000001', name: 'สมชาย ชนะใจ', status: 'อนุมัติ' },
  ];

  const handleDownloadPDF = async () => {
    const element = componentRef.current;
    const canvas = await html2canvas(element); // แปลง HTML เป็น Canvas
    const imgData = canvas.toDataURL('image/png'); // ดึงข้อมูลภาพจาก Canvas

    const pdf = new jsPDF('p', 'mm', 'a4'); // สร้างเอกสาร PDF ขนาด A4
    const pageWidth = pdf.internal.pageSize.getWidth(); // ความกว้างของหน้า PDF
    const pageHeight = pdf.internal.pageSize.getHeight(); // ความสูงของหน้า PDF

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

    pdf.save('ตารางการปรับโครงสร้างหนี้.pdf'); // ดาวน์โหลดไฟล์ PDF
  };

  return (
    <Box sx={{ padding: 4 }}>
      {/* Download PDF Button */}
      <Button variant="contained" color="primary" onClick={handleDownloadPDF}>
        ดาวน์โหลดเป็น PDF
      </Button>

      {/* Content to Convert to PDF */}
      <Box
        ref={componentRef}
        sx={{
          marginTop: 3,
          padding: 2,
          backgroundColor: '#fff',
          borderRadius: 1,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textAlign: 'center', fontWeight: 'bold' }}
        >
          ตารางการปรับโครงสร้างหนี้
        </Typography>
        <TableContainer component={Paper} elevation={2} sx={{ overflowX: 'auto' }}>
          <Table aria-label="Debt restructuring table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>เลขที่คำขอ</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>ชื่อ-สกุล</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>สถานะคำขอ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
