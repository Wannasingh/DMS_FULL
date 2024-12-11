import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const DataTable = ({ rows }) => {
    return (
        <TableContainer>
            <Table>
                <TableHead sx={{ backgroundColor: '#0D47A1' }}>
                    <TableRow>
                        {['เลขที่คำขอ', 'เลขบัตรประชาชน', 'ชื่อ-สกุล', 'ประเภทการเปลี่ยนแปลง', 'วันที่ดำเนินการ', 'สถานที่ขอ', 'ช่องทางการดำเนินการ', 'Action'].map((header, index) => (
                            <TableCell key={index} sx={{ color: 'white', fontWeight: 'bold' }}>
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.requestId}</TableCell>
                            <TableCell>{row.citizenId}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.changeType}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.location}</TableCell>
                            <TableCell>{row.channel}</TableCell>
                            <TableCell>
                                <IconButton>
                                    <VisibilityIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
