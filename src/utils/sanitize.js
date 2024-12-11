import DOMPurify from "dompurify";

// ฟังก์ชันตรวจจับ script tags
export const containsScriptTag = (input) => {
  const scriptTagPattern = /<\s*script\b[^>]*>(.*?)<\s*\/\s*script>/gi;
  return scriptTagPattern.test(input);
};

// ฟังก์ชันทำความสะอาดข้อมูล
export const sanitizeInput = (input) => {
  // ถ้าพบ <script> tags ให้แจ้งเตือนผู้ใช้
  if (containsScriptTag(input)) {
    alert("ไม่อนุญาตให้ใช้ script tags! ข้อมูลนี้ไม่ปลอดภัย");
    return ""; // คืนค่าสตริงว่างเพื่อไม่ให้มีข้อมูลอันตราย
  }

  // ทำความสะอาดข้อมูลด้วย DOMPurify
  return DOMPurify.sanitize(input);
};
