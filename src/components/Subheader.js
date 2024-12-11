import React from 'react';


function Borrower({ textHeader }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#1530A8',
            color: '#ffffff',
            padding: '18px',
            fontSize:'22px',
            
        }}>
            {textHeader}
        </div>

    );
}

export default Borrower;
