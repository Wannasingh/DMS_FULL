import React, { useState, useEffect } from "react";
import { sanitizeInput } from "../utils/sanitize";
import { useNavigate } from "react-router-dom";
import { useUser } from "./Usercontext";
import { Grid ,Box} from "@mui/material";


function SignInForm() {
  const { setUser } = useUser(); // User context to store user data
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(""); // Error state for handling login issues
  const [loading, setLoading] = useState(false); // Loading state to handle button status
  const navigate = useNavigate(); // React Router's navigate function
  const [success, setSuccess] = useState(""); // Success message state (optional)

  // Handle input change and sanitize input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);

    setState((prevState) => ({
      ...prevState,
      [name]: sanitizedValue,
    }));

    if (error) {
      setError(""); // Clear the error once user starts typing
    }
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
  
    const { username, password } = state;
  
    // ตรวจสอบว่ามีการกรอกข้อมูลหรือไม่
    if (!username || !password) {
      setError("กรุณากรอกชื่อบัญชีผู้ใช้และรหัสผ่าน");
      return;
    }
  
    setLoading(true);
    setError(""); // ล้างข้อความแสดงข้อผิดพลาดก่อนหน้า
  
    // ข้อมูลผู้ใช้จำลอง
    const mockUsers = [
      { username: "admin", password: "1234", role: "admin" },
      { username: "user", password: "abcd", role: "user" },
    ];
  
    try {
      // ตรวจสอบว่าข้อมูลที่กรอกตรงกับ mockUsers หรือไม่
      const userData = mockUsers.find(
        (user) => user.username === username && user.password === password
      );
  
      if (userData) {
        setUser(userData); // บันทึกข้อมูลผู้ใช้ใน context หรือ state
        document.cookie = `user=${userData.username}; max-age=3600; path=/`;
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/search"); // เปลี่ยนเส้นทางไปยังหน้า search
      } else {
        setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("เกิดข้อผิดพลาดระหว่างการเข้าสู่ระบบ");
    } finally {
      setLoading(false);
    }
  };
  

  // Automatically check if user is logged in when the page loads
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set user from localStorage if found
      // navigate("/search"); // Redirect if user is already logged in
    }
  }, [setUser, navigate]); // Dependency on setUser and navigate

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit} className="login">
        <h1>เข้าสู่ระบบ</h1>
        <span>โดยบัญชีของคุณ</span>

        {/* Error Message */}
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {/* Success Message (Optional) */}
        {success && (
          <div className="success-message">
            {success}
          </div>
        )}

        {/* Form Fields */}
        <input
          type="text"
          placeholder="ชื่อผู้ใช้"
          name="username"
          value={state.username}
          onChange={handleInputChange}
          disabled={loading}
        />
        <input
          type="password"
          name="password"
          placeholder="รหัสผ่าน"
          value={state.password}
          onChange={handleInputChange}
          disabled={loading}
        />

        {/* Links */}
        <div className="form-links" >
          <Grid container justifyContent="space-between">
          <a href="/forgot-password">ลืมรหัสผ่าน?</a> <Box ml={2}/>
          <a href="/register">สมัครสมาชิก</a>
          </Grid>
        </div>

        {/* Submit Button */}
        <button
        className="button"
          type="submit"
          disabled={loading || !state.username || !state.password} // Disable button if loading or fields are empty
        >
          {loading ? "กำลังโหลด..." : "เข้าสู่ระบบ"}
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
