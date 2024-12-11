import React, { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

// ฟังก์ชันย่อยสำหรับฟอร์มแต่ละประเภท
const FormSection = ({ title, inputTitle, inputMessage, onTitleChange, onMessageChange }) => (
  <Box mb={10}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <TextField
      label="หัวข้อ"
      fullWidth
      value={inputTitle}
      onChange={onTitleChange}
      sx={{ marginBottom: 2 }}
    />
    <Typography variant="body1" gutterBottom>
      ข้อความ
    </Typography>
    <ReactQuill
      value={inputMessage}
      onChange={onMessageChange}
      theme="snow"
      style={{ height: '200px', marginBottom: '20px' }}
    />
  </Box>
);

function SmsForm() {
  const [smsTitle, setSmsTitle] = useState('');
  const [smsMessage, setSmsMessage] = useState('');
  const [emailTitle, setEmailTitle] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');

  return (
    <Box sx={{ width: '60%', margin: '8px auto', padding: '20px' }}>
      <FormSection
        title="SMS"
        inputTitle={smsTitle}
        inputMessage={smsMessage}
        onTitleChange={(e) => setSmsTitle(e.target.value)}
        onMessageChange={(value) => setSmsMessage(value)}
      />
      <FormSection
        title="E-mail"
        inputTitle={emailTitle}
        inputMessage={emailMessage}
        onTitleChange={(e) => setEmailTitle(e.target.value)}
        onMessageChange={(value) => setEmailMessage(value)}
      />
      <FormSection
        title="Notification"
        inputTitle={notificationTitle}
        inputMessage={notificationMessage}
        onTitleChange={(e) => setNotificationTitle(e.target.value)}
        onMessageChange={(value) => setNotificationMessage(value)}
      />
    </Box>
  );
}

export default SmsForm;
