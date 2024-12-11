import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Grid,
  TextField,
  Checkbox,
  Button,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";  // นำเข้า useNavigate
import Table from '../components/Table'

function DebtRestructureForm() {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();  // ใช้ useNavigate สำหรับการเปลี่ยนหน้า

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleClick = () => {
    navigate('/DebtRestructureDetail');  // ใช้ navigate แทน window.location.href
  };
   const handleCheckboxChange = (event, id) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, isSelected: event.target.checked } : row
    );
    setRows(updatedRows);
  };


  const columns = [
    {
    header: "เลือก",
    render: (_, row) => (
      <Checkbox
        checked={row.isSelected}
        onChange={(e) => handleCheckboxChange(e, row.id)}
      />
    ),
  },
    { header: 'เลขที่คำขอ', field: 'RequestNumber' },
    { header: 'เลขที่บัตรประจำตัวประชาชน', field: 'codeID' },
    { header: 'ชื่อ-สกุล', field: 'name' },
    { header: 'ประเภทการยื่นคำขอ', field: 'RequestType' },
    { header: 'วันที่ยื่นคำขอ', field: 'RequestDate' },
    { header: 'สถานะคำขอ', field: 'RequestStatus' },
    { header: 'ช่องทางการยื่นคำขอ', field: 'RequestChannel' },

    
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
            }} onClick={() => handleClick(row)}><VisibilityIcon fontSize="small" /></button>
        ),
    }];
    const [rows, setRows] = useState([
      { id: '1', RequestNumber: '1910000000000', codeID: '1910000000000', name: 'สุดใจ สวยดี', RequestType: 'ขอผ่อนผัน', RequestDate: '12/10/2566', RequestStatus: 'รออนุมัติ', RequestChannel: 'One Stop Service' },
    { id: '2', RequestNumber: '1910000000000', codeID: '1910000000000', name: 'สุดใจ สวยดี', RequestType: 'ขอผ่อนผัน', RequestDate: '12/10/2566', RequestStatus: 'รออนุมัติ', RequestChannel: 'One Stop Service' },
    { id: '3', RequestNumber: '1910000000000', codeID: '1910000000000', name: 'สุดใจ สวยดี', RequestType: 'ขอผ่อนผัน', RequestDate: '12/10/2566', RequestStatus: 'รออนุมัติ', RequestChannel: 'One Stop Service' },
    { id: '4', RequestNumber: '1910000000000', codeID: '1910000000000', name: 'สุดใจ สวยดี', RequestType: 'ขอผ่อนผัน', RequestDate: '12/10/2566', RequestStatus: 'รออนุมัติ', RequestChannel: 'One Stop Service' },
    { id: '5', RequestNumber: '1910000000000', codeID: '1910000000000', name: 'สุดใจ สวยดี', RequestType: 'ขอผ่อนผัน', RequestDate: '12/10/2566', RequestStatus: 'รออนุมัติ', RequestChannel: 'One Stop Service' },
    { id: '6', RequestNumber: '1910000000000', codeID: '1910000000000', name: 'สุดใจ สวยดี', RequestType: 'ขอผ่อนผัน', RequestDate: '12/10/2566', RequestStatus: 'รออนุมัติ', RequestChannel: 'One Stop Service' },
    { id: '7', RequestNumber: '1910000000000', codeID: '1910000000000', name: 'สุดใจ สวยดี', RequestType: 'ขอผ่อนผัน', RequestDate: '12/10/2566', RequestStatus: 'รออนุมัติ', RequestChannel: 'One Stop Service' },

   

  ]);
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{}}>{children}</Box>}
      </div>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#F8F9FA", minHeight: "100vh", p: 2 }}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        textColor="inherit"
        TabIndicatorProps={{
          style: { backgroundColor: "white", height: "3px" },
        }}
        sx={{
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "16px",
            color: "white",
            minWidth: "auto",
            marginRight: "10px",
          },
          "& .MuiTabs-indicator": { display: "none" },
        }}
      >
        <Tab
          label="ลูกจ้าง"
          style={{
            backgroundColor: "#1530A8",
            borderRadius: "8px 8px 0 0",
          }}
        />
        <Tab
          label="นายจ้าง"
          style={{
            backgroundColor: "#1530A8",
            borderRadius: "8px 8px 0 0",
          }}
        />
      </Tabs>

      <CustomTabPanel value={selectedTab} index={0}>
        <Box
          sx={{
            backgroundColor: "#1530A8",
            padding: "12px 16px",
            color: "white",
          }}
        >
          {/* Search Bar */}
          <Grid container spacing={2} alignItems="center" mt={2}>
            <Grid item xs={12} sm={2}>
              <TextField
                select
                label="ประเภทการชำระหนี้"
                fullWidth
                size="small"
                defaultValue=""
                sx={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                }}
              >
                <MenuItem value="all">ทั้งหมด</MenuItem>
                <MenuItem value="1">ขอผ่อนชำระ</MenuItem>
                <MenuItem value="2">ชะลอการชำระหนี้</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="เลขบัตรประชาชน"
                fullWidth
                size="small"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="กำหนดวันที่"
                type="date"
                fullWidth
                size="small"
                InputLabelProps={{ shrink: true }}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Table */}
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            mt: 3,
          }}
        >
          <Box m={5}>
            <Table columns={columns} rows={rows} />
          </Box>
        </Box>
      </CustomTabPanel>










      <CustomTabPanel value={selectedTab} index={1}>
        <Box
          sx={{
            backgroundColor: "#1530A8",
            padding: "12px 16px",
            color: "white",
          }}
        >
          {/* Search Bar */}
          <Grid container spacing={2} alignItems="center" mt={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="ประเภทการชำระหนี้"
                fullWidth
                size="small"
                defaultValue=""
                sx={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                }}
              >
                <MenuItem value="all">ทั้งหมด</MenuItem>
                <MenuItem value="1">ขอผ่อนชำระ</MenuItem>
                <MenuItem value="2">ชะลอการชำระหนี้</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="เลขบัตรประชาชน"
                fullWidth
                size="small"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="กำหนดวันที่"
                type="date"
                fullWidth
                size="small"
                InputLabelProps={{ shrink: true }}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Table */}
        <Box m={5}>
            <Table columns={columns} rows={rows} />
          </Box>
      </CustomTabPanel>
    </Box>
  );
}

export default DebtRestructureForm;
