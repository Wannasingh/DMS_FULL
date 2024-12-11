import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Slider from './components/Slider'; // ใช้ Slider ของคุณ
import { UserProvider } from './components/Usercontext'; // นำเข้าจากตำแหน่งที่เก็บ UserContext

import Login from './page/Login'

function App() {
  return (
    <Router>
      <AppWithSlider />
    </Router>
  );
}

function AppWithSlider() {
  const location = useLocation(); // ใช้ useLocation เพื่อดึง URL ปัจจุบัน

  return (
    <div>
      {/* แสดง Slider ทุกครั้งที่ไม่ใช่หน้า Login */}
      {location.pathname !== '/' && <Slider />}
      <UserProvider>

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/" element={<Login />} />
        {/* เพิ่มเส้นทางอื่นๆ ได้ตามต้องการ */}
      </Routes>
      </UserProvider>

    </div>
  );
}

export default App;
