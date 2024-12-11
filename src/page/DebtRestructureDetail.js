import React, { useState } from "react";
import {
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PreviewIcon from "@mui/icons-material/RemoveRedEye";
import Subheader from '../components/Subheader'
function DebtRestructureDetail() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const files = [
        {
            name: "เอกสารประกอบคำขอ.pdf",
            size: "2.6 MB",
            date: "10/03/2019",
        },
        {
            name: "เอกสารประกอบคำขออีกไฟล์.pdf",
            size: "1.2 MB",
            date: "12/05/2020",
        },
    ];

    return (
        <>
            <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 10, backgroundColor: '#fff' }}>
                <Subheader textHeader='ปรับโครงสร้างหนี้' />
            </Box>
            <Box sx={{ padding: 2, backgroundColor: "#F8F9FA", minHeight: "100vh" }}mt={10}>


                {/* Accordion สำหรับรายละเอียดคำขอ */}
                <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    sx={{ marginTop: 2 }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography variant="body1">รายละเอียดคำขอ</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography>ชื่อ - นามสกุล ผู้กู้ยืม: นางสาว สุดใจ สวยดี</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>เลขที่ประจำตัวประชาชน: 7-7777-7777-77-7</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>สถานะบัญชีเงินกู้: ปกติ</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>วัน/เดือน/ปี เกิด: 05/07/2555</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>สถานะผู้กู้: ปกติ</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>ประเภทคำขอ: ขอผ่อนผัน</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>ช่องทางการยื่นคำขอ: One Stop Service</Typography>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                {/* Accordion สำหรับข้อมูลบัญชี */}
                <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    sx={{ marginTop: 2 }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography variant="body1">ข้อมูลบัญชี</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography>ข้อมูล ณ วันที่: 09/10/2563</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>ยอดเงินกู้ทั้งหมด: 105,000-</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>ยอดเงินต้นคงเหลือ (บาท): 90,000.00-</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>ยอดดอกเบี้ย (บาท): 7,008.00-</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>ยอดรวมปิดบัญชี (บาท): 117,008.00-</Typography>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                {/* Accordion สำหรับที่อยู่ในการจัดส่งเอกสาร */}
                <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    sx={{ marginTop: 2 }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        <Typography variant="body1">ที่อยู่ในการจัดส่งเอกสาร</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography>เลขที่: 1233</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>หมู่บ้าน: สำราญสุข</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>ซอย: เลียบคลองทวีวัฒนา 6</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>จังหวัด: กรุงเทพมหานคร</Typography>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                {/* Accordion สำหรับที่อยู่ที่ทำงาน */}
                <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                    sx={{ marginTop: 2 }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                    >
                        <Typography variant="body1">ที่อยู่ที่ทำงาน</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography>เลขที่: 1233</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>หมู่บ้าน: สำราญสุข</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>ซอย: เลียบคลองทวีวัฒนา 6</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>จังหวัด: กรุงเทพมหานคร</Typography>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                {/* Accordion สำหรับเอกสารประกอบคำขอ */}
                <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                    sx={{ marginTop: 2 }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5-content"
                        id="panel5-header"
                    >
                        <Typography variant="body1">เอกสารประกอบคำขอ</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List sx={{ marginTop: 3 }}>
                            {files.map((file, index) => (
                                <ListItem key={index} sx={{ backgroundColor: "#FFFFFF", borderRadius: "8px", boxShadow: 1, marginBottom: 2, padding: "16px" }}>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item xs={8}>
                                            <ListItemText
                                                primary={file.name}
                                                secondary={`ขนาดไฟล์: ${file.size} | วันที่อัพโหลด: ${file.date}`}
                                            />
                                        </Grid>
                                        <Grid item xs={4} sx={{ textAlign: "right" }}>
                                            <IconButton color="primary" sx={{ marginRight: 2 }}>
                                                <FileDownloadIcon />
                                                <Typography variant="body2" sx={{ marginLeft: 1 }}>Download</Typography>
                                            </IconButton>
                                            <IconButton color="secondary">
                                                <PreviewIcon />
                                                <Typography variant="body2" sx={{ marginLeft: 1 }}>Preview</Typography>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>

                {/* ปุ่มอนุมัติและไม่อนุมัติ */}
                <Box sx={{ marginTop: 3, textAlign: "center" }}>
                    <Button variant="contained" color="success" size="large" sx={{ marginRight: 2 }}>
                        อนุมัติ
                    </Button>
                    <Button variant="contained" color="error" size="large">
                        ไม่อนุมัติ
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default DebtRestructureDetail;
