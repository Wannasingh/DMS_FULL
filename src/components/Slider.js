import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link, Routes, Route } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText, Collapse, ListItemButton, CssBaseline } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { Mail as MailIcon, Home as HomeIcon } from '@mui/icons-material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Borrower from '../page/Borrower'; // ตรวจสอบการนำเข้าคอมโพเนนต์
import ManageBorrower from '../page/ManageBorrower'; // ตรวจสอบการนำเข้าคอมโพเนนต์
import Employer from '../page/Employer'; // ตรวจสอบการนำเข้าคอมโพเนนต์
import DetailEmployer from '../page/DetailEmployer'; // ตรวจสอบการนำเข้าคอมโพเนนต์
import DetailBorrowOfCompany from '../page/DetailBorrowOfCompany'; // ตรวจสอบการนำเข้าคอมโพเนนต์
import DetailBorrow15 from '../page/DetailBorrow15'; // ตรวจสอบการนำเข้าคอมโพเนนต์
import ManageEmployer from '../page/ManageEmployer'; // ตรวจสอบการนำเข้าคอมโพเนนต์
import CalculateAnnuity from '../page/CalculateAnnuity'
import DebtRestructureForm from '../page/DebtRestructureForm'
import Test2 from '../page/Test2'
// import DebtRestructure from '../page/Test2';

import DebtRestructureDetail from '../page/DebtRestructureDetail'
import DebtFollowUp from '../page/DebtFollowUp'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BalanceIcon from '@mui/icons-material/Balance';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import Fromnotify from '../page/Fromnotify'
import IncentiveMeasures from '../page/incentiveMeasures'
import EditincentiveMeasures from '../page/EditincentiveMeasures'
import AddincentiveMeasures from '../page/AddincentiveMeasures'
import NotificationsIcon from '@mui/icons-material/Notifications';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import NotifyManage from '../page/NotifyManage.js';
import Addnotify from '../page/Addnotify.js'
import Editnotify from '../page/Editnotify.js'
import IncomeLog from '../page/IncomeLog.js'
import RefundList from'../page/RefundList.js'

console.log("kik",Test2); // ต้องไม่เป็น undefined

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  background: '#1530A8',
  color: '#ffffff',
  zIndex: theme.zIndex.drawer - 1,
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  background: '#1530A8',
  color: '#ffffff',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  background: '#1530A8',  // สีพื้นหลังของ header
  color: '#ffffff',
  height: 64,  // กำหนดความสูงของ Drawer Header
}));

const ListWrapper = styled('div')({
  flexGrow: 1,  // ทำให้ List ขยายเต็มพื้นที่
  overflowY: 'auto', // เปิดการเลื่อนในแนวตั้ง
  paddingBottom: '16px',  // เพิ่มพื้นที่ด้านล่างเล็กน้อย
  '&::-webkit-scrollbar': {
    display: 'none', // ซ่อนแถบเลื่อน
  },
});


const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  background: '#1530A8',
  color: '#ffffff',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  zIndex: theme.zIndex.drawer - 1,
  overflowY: 'auto',  // เลื่อนในแนวตั้ง
  overflowX: 'hidden', // ปิดการเลื่อนในแนวนอน
  height: '100vh',  // ให้ Drawer มีความสูงเต็มหน้าจอ
  '&::-webkit-scrollbar': {
    display: 'none', // ซ่อนแถบเลื่อน
  },
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));


export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState(null);

  // const handleDrawerOpen = () => setOpen(true);
  // // const handleDrawerClose = () => setOpen(false);

  const handleMenuToggle = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  const handleMouseEnter = () => setOpen(true);
  // const handleMouseLeave = () => setOpen(false);
  // const handleDrawerClose = () => {
  //   setOpen(false);
  //   setActiveMenu(null); 
  // };
  
  const handleMouseLeave = () => {
    setOpen(false);
    setActiveMenu(null); 
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <DrawerHeader>
          <img src='/logo.png' alt="dls" style={{ width: '50px', height: 'auto', marginTop: '5px' }} />
        </DrawerHeader>
        <ListWrapper>
          <List>
            {['หน้าหลัก'].map((text) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton component={text === 'หน้าหลัก' ? Link : 'div'} to={text === 'หน้าหลัก' ? '/' : undefined} sx={{ justifyContent: open ? 'initial' : 'center' }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto' }}>
                    <HomeIcon sx={{ color: open ? '#ffffff' : '#ffffff' }} />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <ListItem disablePadding>
            <ListItemButton onClick={() => handleMenuToggle('manageDebtMenu')}>
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto' }}>
                <ManageAccountsIcon sx={{ color: open ? '#ffffff' : '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="บริหารจัดการข้อมูล" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <Collapse in={activeMenu === 'manageDebtMenu'} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {[
                { name: 'ผู้กู้', link: '/Borrower' },
                { name: 'นายจ้าง', link: '/Employer' },
              ].map((item) => (
                <ListItem key={item.name} disablePadding>
                  <ListItemButton component={Link} to={item.link} sx={{ pl: 4 }}>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>

          <List>
            {['คำนวณเงินงวด'].map((text) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton component={text === 'คำนวณเงินงวด' ? Link : 'div'} to={text === 'คำนวณเงินงวด' ? '/CalculateAnnuity' : undefined} sx={{ justifyContent: open ? 'initial' : 'center' }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto' }}>
                    <MonetizationOnIcon sx={{ color: open ? '#ffffff' : '#ffffff' }} />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <List>
            {['ปรับโครงสร้างหนี้'].map((text) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton component={text === 'ปรับโครงสร้างหนี้' ? Link : 'div'} to={text === 'ปรับโครงสร้างหนี้' ? '/DebtRestructureForm' : undefined} sx={{ justifyContent: open ? 'initial' : 'center' }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto' }}>
                    <BalanceIcon sx={{ color: open ? '#ffffff' : '#ffffff' }} />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <ListItem disablePadding>
            <ListItemButton onClick={() => handleMenuToggle('followDebtMenu')}>
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto' }}>
                <TrackChangesIcon sx={{ color: open ? '#ffffff' : '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="ติดตามหนี้" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <Collapse in={activeMenu === 'followDebtMenu'} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {[
                { name: 'ผู้กู้', link: '/DebtFollowUp' },
                { name: 'นายจ้าง', link: '/follow-up-report' },
              ].map((item) => (
                <ListItem key={item.name} disablePadding>
                  <ListItemButton component={Link} to={item.link} sx={{ pl: 4 }}>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>

          <List>
            {['จัดการการแจ้งเตือน'].map((text) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton component={text === 'จัดการการแจ้งเตือน' ? Link : 'div'} to={text === 'จัดการการแจ้งเตือน' ? '/NotifyManage' : undefined} sx={{ justifyContent: open ? 'initial' : 'center' }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto' }}>
                    <NotificationsIcon   sx={{ color: open ? '#ffffff' : '#ffffff' }} />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>





          <List>
            {['มาตรการจูงใจ'].map((text) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton component={text === 'มาตรการจูงใจ' ? Link : 'div'} to={text === 'มาตรการจูงใจ' ? '/IncentiveMeasures' : undefined} sx={{ justifyContent: open ? 'initial' : 'center' }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto' }}>
                    <TrendingUpIcon sx={{ color: open ? '#ffffff' : '#ffffff' }} />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

 
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleMenuToggle('receiveDebtMenu')}>
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto' }}>
                <AttachMoneyIcon sx={{ color: open ? '#ffffff' : '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="รับชำระหนี้" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <Collapse in={activeMenu === 'receiveDebtMenu'} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {[
                { name: 'บันทึกเงินเข้า', link: '/IncomeLog' },  
                { name: 'คืนเงิน', link: '/RefundList' },  
              ].map((item) => (
                <ListItem key={item.name} disablePadding>
                  <ListItemButton component={Link} to={item.link} sx={{ pl: 4 }}>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>




        </ListWrapper>

      </Drawer>

      {/* Route configuration */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          // p: 3,
        }}
      >

        <Routes>
          <Route path="Borrower" element={<Borrower />} />
          <Route path="ManageBorrower" element={<ManageBorrower />} />
          <Route path="Employer" element={<Employer />} />
          <Route path="DetailEmployer" element={<DetailEmployer />} />
          <Route path="DetailBorrowOfCompany" element={<DetailBorrowOfCompany />} />
          <Route path="DetailBorrow15" element={<DetailBorrow15 />} />
          <Route path="ManageEmployer" element={<ManageEmployer />} />
          <Route path="DebtRestructureForm" element={<DebtRestructureForm />} />
          <Route path="DebtRestructureDetail" element={<DebtRestructureDetail />} />
          <Route path="CalculateAnnuity" element={<CalculateAnnuity />} />
          <Route path="DebtFollowUp" element={<DebtFollowUp />} />
          <Route path="Fromnotify" element={<Fromnotify />} />
          <Route path="IncentiveMeasures" element={<IncentiveMeasures />} />
          <Route path="EditincentiveMeasures" element={<EditincentiveMeasures />} />
          <Route path="AddincentiveMeasures" element={<AddincentiveMeasures />} />
          <Route path="NotifyManage" element={<NotifyManage />} />
          <Route path="Addnotify" element={<Addnotify />} />
          <Route path="Editnotify" element={<Editnotify />} />
          <Route path="IncomeLog" element={<IncomeLog />} />
          <Route path="RefundList" element={<RefundList />} />
          <Route path="/test2" element={<Test2 />} />
         
          
        </Routes>

      </Box>
    </Box>
  );
}
