import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Table from '../components/Table'
import { useLocation, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const columns = [
    { header: 'งวดเดือน/ปี', field: 'year' },
    { header: 'จำนวนลูกหนี้', field: 'quantity' },
    { header: 'จำนวนเงินที่ต้องชำระ', field: 'amount' },
    { header: 'วันที่ชำระหนี้', field: 'day' },
    { header: 'สถานะการชำระ', field: 'status' },


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
        }} ><VisibilityIcon fontSize="small" /></button>),
    }];
  const rows = [
    { id: '1', year: '12/2566', quantity: '10', amount: '800', day: '15/11/2566', status: 'ยังไม่ได้ชำระหนี้' },
    { id: '2', year: '11/2566', quantity: '10', amount: '800', day: '15/11/2566', status: 'ชำระแล้ว' },
    { id: '3', year: '10/2566', quantity: '9', amount: '800', day: '15/11/2566', status: 'ชำระแล้ว' },
    { id: '4', year: '9/2566', quantity: '9', amount: '800', day: '15/11/2566', status: 'ยังไม่ได้ชำระหนี้' },
    { id: '5', year: '8/2566', quantity: '8', amount: '800', day: '15/11/2566', status: 'ชำระแล้ว' },



  ];

  const columns2 = [
    { header: 'งวดเดือน/ปี', field: 'year' },
    { header: 'รายละเอียด', field: 'detail' },
    { header: 'จำนวนเงินที่ต้องชำระ', field: 'amount' },
    { header: 'วันที่ครบกำหนดชำระหนี้ค่าปรับ', field: 'day' },
    { header: 'สถานะการชำระ', field: 'status' },


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
        }}><VisibilityIcon fontSize="small" /></button>
      ),
    }];
  const rows2 = [
    { id: '1', year: '12/2566', detail: 'จ่ายเงินล่าช้า', amount: '800', day: '15/11/2566', status: 'ยังไม่ได้ชำระค่าปรับ' },
    { id: '2', year: '11/2566', detail: 'จ่ายเงินล่าช้า', amount: '800', day: '15/11/2566', status: 'ชำระแล้ว' },
    { id: '3', year: '10/2566', detail: 'จ่ายเงินล่าช้า', amount: '800', day: '15/11/2566', status: 'ชำระแล้ว' },
    { id: '4', year: '9/2566', detail: 'จ่ายเงินล่าช้า', amount: '800', day: '15/11/2566', status: 'ยังไม่ได้ชำระค่าปรับ' },
    { id: '5', year: '8/2566', detail: 'จ่ายเงินล่าช้า', amount: '800', day: '15/11/2566', status: 'ชำระแล้ว' },



  ];



  const columns3 = [
    { header: 'เลขที่คำขอ', field: 'ReqNumber' },
    { header: 'ประเภทคำขอ', field: 'ReqType' },
    { header: 'สาเหตุ', field: 'Reason' },
    { header: 'วันที่ยื่นคำขอ', field: 'day' },
    { header: 'สถานะการดำเนินการ', field: 'status' },


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
        }} ><VisibilityIcon fontSize="small" /></button>),
    }];
  const rows3 = [
    { id: '1', ReqNumber: '00000001', ReqType: 'ผ่อนผันการชำระหนี้', Reason: 'บริหารเงินไม่ทัน', day: '15/11/2566', status: 'รอตรวจสอบ' },
    { id: '2', ReqNumber: '00000010', ReqType: 'ยกเว้นค่าปรับ', Reason: 'บริหารเงินไม่ทัน', day: '15/11/2566', status: 'รอตรวจสอบ' },
    { id: '3', ReqNumber: '00000011', ReqType: 'ยกเว้นค่าปรับ', Reason: 'บริหารเงินไม่ทัน', day: '15/11/2566', status: 'อนุมัติแล้ว' },
    { id: '4', ReqNumber: '00000012', ReqType: 'ผ่อนผันการชำระหนี้', Reason: 'บริหารเงินไม่ทัน', day: '15/11/2566', status: 'อนุมัติแล้ว' },
    { id: '5', ReqNumber: '00000013', ReqType: 'ผ่อนผันการชำระหนี้', Reason: 'บริหารเงินไม่ทัน', day: '15/11/2566', status: 'อนุมัติแล้ว' },



  ];



  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="ข้อมูลการชำระหนี้" {...a11yProps(0)} />
          <Tab label="ข้อมูลค่าปรับ" {...a11yProps(1)} />
          <Tab label="ประวัติการยื่นคำขอ" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Table columns={columns} rows={rows} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Table columns={columns2} rows={rows2} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Table columns={columns3} rows={rows3} />
      </CustomTabPanel>
    </Box>
  );
}
