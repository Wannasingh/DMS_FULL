import React, { useState } from 'react';
import Subheader from '../components/Subheader';
import { Box, Grid, TextField, FormControl, InputLabel, MenuItem, Select, Button, Menu, Tooltip, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import TableBorrower from '../components/Table'
import { useLocation, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
function Borrower() {

  const [inputList, setInputList] = useState([
    { accountCode: "", accountName: "", status: "ใช้งาน" },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { accountCode: "", accountName: "", status: "ใช้งาน" },
    ]);
  };
  const columns = [
    { header: 'ลำดับ', field: 'number' },
    { header: 'รหัสบัญชีเงินกู้', field: 'accountCode' },
    { header: 'ชื่อบัญชีเงินกู้', field: 'accountName' },
    { header: 'สถานะการใช้งาน', field: 'status' },
    { header: 'ผู้ทำรายการล่าสุด', field: 'LatTranMaker' },
    { header: 'วันเวลาทำรายการล่าสุด', field: 'dateTime' },

  ];
  const rows = [
    { number: '1', accountCode: '1910000000001', accountName: 'กยศ', status: 'ใช้งาน', LatTranMaker: '', dateTime: '11/11/2011' },
    { number: '2', accountCode: '1910000000002', accountName: 'พรบ60', status: 'ไม่ใข้งาน', LatTranMaker: '', dateTime: '11/11/2011' },
    { number: '3', accountCode: '1910000000003', accountName: 'กรอ', status: 'ใช้งาน', LatTranMaker: '', dateTime: '11/11/2011' },
    { number: '4', accountCode: '1910000000004', accountName: 'พรบ60', status: 'ไม่ใข้งาน', LatTranMaker: '', dateTime: '11/11/2011' },
    { number: '5', accountCode: '1910000000005', accountName: 'กรอ', status: 'ใช้งาน', LatTranMaker: '', dateTime: '11/11/2011' },
    { number: '6', accountCode: '1910000000006', accountName: 'กยศ', status: 'ใช้งาน', LatTranMaker: '', dateTime: '11/11/2011' },
    { number: '7', accountCode: '1910000000007', accountName: 'กยศ', status: 'ไม่ใข้งาน', LatTranMaker: '', dateTime: '11/11/2011' },
    { number: '8', accountCode: '1910000000008', accountName: 'กรอ', status: 'ใช้งาน', LatTranMaker: '', dateTime: '11/11/2011' },
    { number: '9', accountCode: '1910000000009', accountName: 'พรบ60', status: 'ใช้งาน', LatTranMaker: '', dateTime: '11/11/2011' },



  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>

      <Box style={{ marginTop: '10px' }}>
        <Box sx={{ width: "100%", margin: "auto" }} textAlign="end">
          <Grid container spacing={5} sx={{ margin: "0 auto" }}>
            {inputList.map((item, index) => (
              <React.Fragment key={index}>
                <Grid item md={3}>
                  <TextField
                    name="accountCode"
                    label="รหัสบัญชีเงินกู้"
                    value={item.accountCode}
                    onChange={(e) => handleInputChange(e, index)}
                    size="small"
                    sx={{ fontSize: "16px", borderRadius: "100px" }}
                  />
                </Grid>
                <Grid item md={3}>
                  <TextField
                    name="accountName"
                    label="ชื่อบัญชีเงินกู้"
                    value={item.accountName}
                    onChange={(e) => handleInputChange(e, index)}
                    size="small"
                    sx={{ fontSize: "16px", borderRadius: "100px" }}
                  />
                </Grid>
                <Grid item md={3}>
                  <FormControl>
                    <RadioGroup
                      row
                      name="status"
                      value={item.status}
                      onChange={(e) => handleInputChange(e, index)}
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
                <Grid item md={1}>
                  {inputList.length > 1 && (
                    <Button
                      style={{
                        borderRadius: "100px",
                        backgroundColor: "#D32F2F",
                      }}
                      variant="contained"
                      onClick={() => handleRemoveClick(index)}
                    >
                      ลบ
                    </Button>
                  )}
                </Grid>
                {index === inputList.length - 1 && (
                  <Grid item md={1}>
                    <Button
                      style={{
                        borderRadius: "100px",
                        backgroundColor: "#1530A8",
                      }}
                      variant="contained"
                      onClick={handleAddClick}
                    >
                      เพิ่ม
                    </Button>
                  </Grid>
                )}
              </React.Fragment>
            ))}
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
                backgroundColor: "#1530A8",
              }}
              variant="contained"
              onClick={() =>
                setInputList([{ accountCode: "", accountName: "", status: "ใช้งาน" }])
              }
            >
              ล้าง
            </Button>
          </Box>
        </Box>
        {/* </Grid> */}
        <Box m={5}>
          <TableBorrower columns={columns} rows={rows} />
        </Box>
      </Box>
    </>
  );
}

export default Borrower;
