import React, { useState } from "react";
import {
    Box,
    Tabs,
    Tab,
    Grid,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
    MenuItem,
    Typography,
    IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";  // นำเข้า useNavigate

function DebtRestructureForm() {
    const [selectedTab, setSelectedTab] = useState(0);
    const navigate = useNavigate();  // ใช้ useNavigate สำหรับการเปลี่ยนหน้า

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleClick = () => {
        navigate('/DebtRestructureDetail');  // ใช้ navigate แทน window.location.href
    };

    const tableData = [
        {
            id: 1,
            idCard: "x-xxxx-xxxxx-xx-x",
            name: "สุดใจ สวยดี",
            RefundReason: "กรณีปิดบัญชี มีเงินเกิน",
            RefundStatus: "รอลูกหนี้ตรวจสอบ",
            remarks: "รอบบัญชี",
        },
        {
            id: 2,
            idCard: "x-xxxx-xxxxx-xx-x",
            name: "สุดใจ สวยดี",
            RefundReason: "กรณีปิดบัญชี มีเงินเกิน",
            RefundStatus: "รอตั้งหนี้โอนคืน",
            remarks: "รอบบัญชี",
        },
        {
            id: 3,
            idCard: "x-xxxx-xxxxx-xx-x",
            name: "สุดใจ สวยดี",
            RefundReason: "กรณีปิดบัญชี มีเงินเกิน",
            RefundStatus: "รอตั้งหนี้โอนคืน",
            remarks: "รอบบัญชี",
        },
    ];

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
                    label="ตรวจสอบ"
                    style={{
                        backgroundColor: "#1530A8",
                        borderRadius: "8px 8px 0 0",
                    }}
                />
                <Tab
                    label="โอนเงิน"
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
                                label="เลขบัตรประชาชน"
                                fullWidth
                                size="small"
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: "4px",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <TextField
                                label="ชื่อ-นามสกุล"
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
                                <MenuItem value="1">รอลูกหนี้ตรวจสอบ</MenuItem>
                                <MenuItem value="2">รอตั้งหนี้คืนเงิน</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                select
                                label="สาเหตุการคืนเงิน"
                                fullWidth
                                size="small"
                                defaultValue=""
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: "4px",
                                }}
                            >
                                <MenuItem value="all">ทั้งหมด</MenuItem>
                                <MenuItem value="1">กรณีปิดบัญชี มีเงินเกิน</MenuItem>
                                <MenuItem value="2">กรณีชำระหนี้เกินเงินงวดของปี</MenuItem>
                            </TextField>
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
                    <Table>
                        <TableHead sx={{ backgroundColor: "#0D47A1" }}>
                            <TableRow>
                                {[
                                    "",
                                    "หมายเลขประจำตัวประชาชน",
                                    "ชื่อ - นามสกุล",
                                    "สาเหตุการคืนเงิน",
                                    "สถานะการคืน",
                                    "หมายเหตุ",

                                ].map((header, index) => (
                                    <TableCell
                                        key={index}
                                        sx={{
                                            color: "white",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            border: "1px solid #DDD",
                                        }}
                                    >
                                        {header}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((row, index) => (
                                <TableRow key={row.id}>
                                    <TableCell align="center">{index + 1}</TableCell>
                                    <TableCell align="center">{row.idCard}</TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.RefundReason}</TableCell>
                                    <TableCell align="center">{row.RefundStatus}</TableCell>
                                    <TableCell align="center">{row.remarks}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
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
                        <Grid item xs={12} sm={2}>
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
                        <Grid item xs={12} sm={2}>
                            <TextField
                                label="ชื่อ-นามสกุล"
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
                                select
                                label="สถานะการคืน"
                                fullWidth
                                size="small"
                                defaultValue=""
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: "4px",
                                }}
                            >
                                <MenuItem value="all">ทั้งหมด</MenuItem>
                                <MenuItem value="1">รอลูกหนี้ตรวจสอบ</MenuItem>
                                <MenuItem value="2">รอตั้งหนี้คืนเงิน</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                select
                                label="สาเหตุการคืนเงิน"
                                fullWidth
                                size="small"
                                defaultValue=""
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: "4px",
                                }}
                            >
                                <MenuItem value="all">ทั้งหมด</MenuItem>
                                <MenuItem value="1">กรณีปิดบัญชี มีเงินเกิน</MenuItem>
                                <MenuItem value="2">กรณีชำระหนี้เกินเงินงวดของปี</MenuItem>
                            </TextField>
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
                    <Table>
                        <TableHead sx={{ backgroundColor: "#0D47A1" }}>
                            <TableRow>
                                {[
                                    "",
                                    "หมายเลขประจำตัวประชาชน",
                                    "ชื่อ - นามสกุล",
                                    "สาเหตุการคืนเงิน",
                                    "สถานะการคืน",
                                    "หมายเหตุ",
                                   
                                ].map((header, index) => (
                                    <TableCell
                                        key={index}
                                        sx={{
                                            color: "white",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            border: "1px solid #DDD",
                                        }}
                                    >
                                        {header}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((row, index) => (
                                <TableRow key={row.id}>
                                    <TableCell align="center">{index + 1}</TableCell>
                                    <TableCell align="center">{row.idCard}</TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.RefundReason}</TableCell>
                                    <TableCell align="center">{row.RefundStatus}</TableCell>
                                    <TableCell align="center">{row.remarks}</TableCell>
                                
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </CustomTabPanel>
        </Box>
    );
}

export default DebtRestructureForm;
