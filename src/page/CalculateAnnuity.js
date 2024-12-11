import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router-dom';
import AddFunds from '../components/AddFunds';
import Subheader from '../components/Subheader';
import PaymentDue1 from './PaymentDue1';
import InterestCalcul from './InterestCalcul'
import PenaltyCalculat from './PenaltyCalculat'
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

export default function CalculateAnnuity() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };




    return (
        <>
            <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 10, backgroundColor: '#fff' }}>
                <Subheader textHeader='คำนวนงวดเงิน' />
            </Box>
            <Box sx={{ width: '100%' ,marginTop: '80px'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="เพิ่มกองทุน" {...a11yProps(0)} />
                        <Tab label="กำหนดชำระงวดแรก" {...a11yProps(1)} />
                        <Tab label="การคำนวณดอกเบี้ย" {...a11yProps(2)} />
                        <Tab label="การคำนวณเบี้ยปรับ" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <AddFunds/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <PaymentDue1/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <InterestCalcul/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <PenaltyCalculat/>
                </CustomTabPanel>
            </Box>
        </>
    );
}
