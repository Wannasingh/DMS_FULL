import React, { useState, useRef } from 'react';
import Subheader from '../components/Subheader';
import { Box, Grid, TextField, FormControl, InputLabel, MenuItem, Select, Button, Menu, Tooltip } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import TableBorrower from '../components/Table'
import { useLocation, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Borrower() {
    const [selectedValue, setSelectedValue] = useState('');
    const navigate = useNavigate();

    const options = [
        'PDF',
        'exel',
        'CSV',
    ];
    const handleTableClick = (row) => {
        console.log('Selected Row:', row);
        navigate('/ManageBorrower', {
            state: {
                id: row.id,
                name: row.name,
                codeID: row.codeID,
                Tel: row.Tel,
                Email: row.Email,
                status: row.status
            }
        });
    };

    const columns = [
        { header: 'รหัสบัตรประชาชน', field: 'codeID' },
        { header: 'ชื่อ-นามสกุล', field: 'name' },
        { header: 'เบอร์โทร', field: 'Tel' },
        { header: 'Email', field: 'Email' },
        { header: 'สถานะลูกหนี้', field: 'status' },
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
                }} onClick={() => handleTableClick(row)} ><EditIcon fontSize="small" /></button>
            ),
        }];
    const rows = [
        { id: '1', codeID: '1910000000000', name: 'สุภาวดี สวยดี', Tel: '098 765 4321', Email: 'Test@gmail.com', status: 'สังกัดองค์กรนายจ้าง' },
        { id: '2', codeID: '1910000000001', name: 'ฤดี สวยดี', Tel: '098 765 4321', Email: 'Test@gmail.com', status: 'ครบกำหนดชำระ' },
        { id: '3', codeID: '1910000000002', name: 'ฤทัย สวยดี', Tel: '098 765 4321', Email: 'Test@gmail.com', status: 'สังกัดองค์กรนายจ้าง' },
        { id: '4', codeID: '1910000000003', name: 'อรทัย สวยดี', Tel: '098 765 4321', Email: 'Test@gmail.com', status: 'สังกัดองค์กรนายจ้าง' },
        { id: '5', codeID: '1910000000003', name: 'อรทัย สวยดี', Tel: '098 765 4321', Email: 'Test@gmail.com', status: 'สังกัดองค์กรนายจ้าง' },
        { id: '6', codeID: '1910000000003', name: 'อรทัย สวยดี', Tel: '098 765 4321', Email: 'Test@gmail.com', status: 'สังกัดองค์กรนายจ้าง' },
        { id: '7', codeID: '1910000000003', name: 'อรทัย สวยดี', Tel: '098 765 4321', Email: 'Test@gmail.com', status: 'สังกัดองค์กรนายจ้าง' },
        { id: '8', codeID: '1910000000003', name: 'อรทัย สวยดี', Tel: '098 765 4321', Email: 'Test@gmail.com', status: 'สังกัดองค์กรนายจ้าง' },
        { id: '9', codeID: '1910000000003', name: 'อรทัย สวยดี', Tel: '098 765 4321', Email: 'Test@gmail.com', status: 'สังกัดองค์กรนายจ้าง' },
        { id: '10', codeID: '1910000000003', name: 'อรทัย สวยดี', Tel: '098 765 4321', Email: 'Test@gmail.com', status: 'สังกัดองค์กรนายจ้าง' },
        { id: '11', codeID: '1910000000003', name: 'อรทัย สวยดี', Tel: '098 765 4321', Email: 'Test@gmail.com', status: 'สังกัดองค์กรนายจ้าง' },


    ];
    const ITEM_HEIGHT = 48;
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const componentRef = useRef();

    const handleDownloadOptionClick = (option) => {
        handleClose();
        if (option === 'PDF') {
            handleDownloadPDF();
        }
        if (option === 'CSV') {
            handleSaveCSV();
        }
    };

    const handleDownloadPDF = async () => {
        try {
            if (!componentRef.current) {
                console.error('Error: componentRef is not attached or element not found.');
                return;
            }
    
            
            const printableContent = componentRef.current.cloneNode(true);
            
            const managementHeader = Array.from(printableContent.querySelectorAll("th")).find(
                (th) => th.textContent.trim() === "การจัดการ"
            );
            if (managementHeader) managementHeader.style.display = "none";
            const buttons = printableContent.querySelectorAll("button");
            buttons.forEach((button) => button.style.display = "none");
    
      
            const tempContainer = document.createElement("div");
            tempContainer.style.position = "absolute";
            tempContainer.style.top = "-9999px";
            tempContainer.appendChild(printableContent);
            document.body.appendChild(tempContainer);
    
        
            const canvas = await html2canvas(printableContent);
    
            
            document.body.removeChild(tempContainer);
    
            
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const pageWidth = pdf.internal.pageSize.getWidth();
            const imgWidth = pageWidth;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
            pdf.save("ตารางการปรับโครงสร้างหนี้.pdf");
        } catch (error) {
            console.error("Error generating PDF:", error);
        }
    };
    
    const handlePrint = () => {
        if (componentRef.current) {
            // Clone DOM ที่ต้องการพิมพ์
            const printableContent = componentRef.current.cloneNode(true);
    
            // ซ่อนหัวตารางที่มีข้อความว่า "การจัดการ"
            const managementHeader = Array.from(printableContent.querySelectorAll("th")).find(
                (th) => th.textContent.trim() === "การจัดการ"
            );
            if (managementHeader) managementHeader.style.display = "none";
    
            // ซ่อนคอลัมน์ที่เกี่ยวข้องในส่วนข้อมูล
            const columnIndex = Array.from(managementHeader.parentNode.children).indexOf(managementHeader);
            Array.from(printableContent.querySelectorAll(`tr`)).forEach((row) => {
                const cell = row.children[columnIndex];
                if (cell) cell.style.display = "none"; // ซ่อนเซลล์ในคอลัมน์นี้
            });
    
            // สร้างหน้าพิมพ์
            const printWindow = window.open("", "_blank");
            printWindow.document.open();
            printWindow.document.write(`
                <html>
                    <head>
                        <title>พิมพ์ข้อมูล</title>
                        <style>
                            body { font-family: Arial, sans-serif; margin: 20px; }
                            table { width: 100%; border-collapse: collapse; }
                            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                            th { background-color: #f4f4f4; }
                        </style>
                    </head>
                    <body>
                        ${printableContent.innerHTML}
                    </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        } else {
            console.error('Error: componentRef is not attached to any DOM element.');
        }
    };
    

    const handleSaveCSV = () => {
        try {
            const data = rows.map((row) => ({
                codeID: row.codeID,
                name: row.name,
                Tel: row.Tel,
                Email: row.Email,
                status: row.status,
            }));
    
            const headers = ['รหัสบัตรประชาชน,ชื่อ-นามสกุล,เบอร์โทร,Email,สถานะลูกหนี้'];
            const csvRows = [
                headers.join(','), 
                ...data.map((row) =>
                    `${row.codeID},${row.name},${row.Tel},${row.Email},${row.status}`
                ),
            ];
    
            const csvString = '\uFEFF' + csvRows.join('\n'); // เพิ่ม BOM (U+FEFF)
            const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.href = url;
            link.setAttribute('download', 'ข้อมูลลูกหนี้.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error saving CSV file:', error);
        }
    };
    





    return (
        <>
            <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 10, backgroundColor: '#fff' }}>
                <Subheader textHeader='บริหารจัดการข้อมูลผู้กู้' />
            </Box>
            <Box style={{ marginTop: '50px' }}>
                <Box sx={{ width: '100%', right: 0, margin: 'auto', }} textAlign='end' >
                    {/* <Grid container md={12} textAlign='end'> */}

                    <Grid container md={8} spacing={5} sx={{ margin: '0 auto', right: '0' }}>
                        <Grid item md={4}>

                            <TextField
                                id="outlined"
                                label="เลขบัตรประชาชน/ชื่อนามสกุล"
                                defaultValue=""
                                size='small'
                                sx={{ fontSize: '16px', borderRadius: '100px' }}

                            />
                        </Grid>
                        <Grid item md={4}>
                            <FormControl fullWidth >
                                <InputLabel id="dropdown-label" style={{ marginTop: '-7px' }} textAlign='start'>สถานะลูกหนี้</InputLabel>
                                <Select
                                    labelId="dropdown-label"
                                    id="dropdown"
                                    value={selectedValue}
                                    onChange={handleChange}
                                    label="สถานะลูกหนี้"
                                    size='small'
                                >
                                    <MenuItem value={1}>ครบกำหนดชำระ</MenuItem>
                                    <MenuItem value={2}>ลูกหนี้ไก่ลเกลี่ย</MenuItem>
                                    <MenuItem value={3}>ลูกหนี้ในองค์กร</MenuItem>
                                    <MenuItem value={4}>ลูกหนี้เสียชีวิต</MenuItem>
                                    <MenuItem value={4}>ลูกหนี้พิการ</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={2}>
                            <Button onClick={handlePrint}
                                style={{ borderRadius: "100px", backgroundColor: "#1530A8" }} variant="contained">พิมพ์ <PrintIcon style={{ marginLeft: '10px' }} /></Button>
                        </Grid>
                        <Grid item md={2}>
                            <Tooltip title="Download Options">
                                <IconButton
                                    aria-label="download"
                                    id="long-button"
                                    aria-controls={open ? 'long-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                    style={{
                                        backgroundColor: '#f0f0f0',
                                        border: '1px solid #ddd',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    <DownloadIcon fontSize="Medium " style={{ color: '#1976d2' }} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                id="long-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '20ch',
                                        borderRadius: '10px',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                                    },
                                }}
                            >
                                {options.map((option) => (
                                    <MenuItem
                                        key={option}
                                        onClick={() => handleDownloadOptionClick(option)} // Handle the click for download options
                                        style={{
                                            fontSize: '14px',
                                            padding: '10px 20px',
                                            borderBottom: '1px solid #f0f0f0',
                                        }}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Grid>
                    </Grid>
                </Box>

                {/* </Grid> */}
                <Box m={5} ref={componentRef}>
                    <TableBorrower columns={columns} rows={rows} />
                </Box>
            </Box>
        </>
    );
}

export default Borrower;
