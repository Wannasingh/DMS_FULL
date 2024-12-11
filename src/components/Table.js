import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const TableComponent = ({ columns, rows }) => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="custom table">
        {/* Table Header */}
        <TableHead style={{ backgroundColor: '#0c0758' }}>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell
                key={index}
                align={col.align || 'left'}
                sx={{ fontWeight: 'bold', color: '#fff' }}
              >
                {col.header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:hover': { backgroundColor: '#f5f5f5' },
                }}
              >
                {columns.map((col, colIndex) => (
                  <TableCell
                    key={colIndex}
                    align={col.align || 'left'}
                  >
                    {col.render ? col.render(row[col.field], row) : row[col.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                ไม่พบข้อมูล
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
