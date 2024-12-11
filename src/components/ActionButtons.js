import React from 'react';
import { Box, Button } from '@mui/material';

const ActionButtons = () => {
    return (
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button variant="contained" color="error">
                ไม่อนุมัติ
            </Button>
            <Button variant="contained" color="success">
                อนุมัติ
            </Button>
        </Box>
    );
};

export default ActionButtons;
