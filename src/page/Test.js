import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
// import THSarabunBase64 from "../assets/fonts/THSarabunBase64"; // Adjust the path to your Base64 file

function DebtRestructureForm() {
  const rows = [
    {
      RequestNumber: "1910000000000",
      codeID: "1910000000000",
      name: "สุดใจ สวยดี",
      RequestType: "ขอผ่อนผัน",
      RequestDate: "12/10/2566",
      RequestStatus: "รออนุมัติ",
      RequestChannel: "One Stop Service",
    },
    {
      RequestNumber: "1910000000001",
      codeID: "1910000000001",
      name: "สมชาย ชนะใจ",
      RequestType: "ชะลอการชำระหนี้",
      RequestDate: "11/10/2566",
      RequestStatus: "อนุมัติ",
      RequestChannel: "บริการออนไลน์",
    },
  ];

  const columns = [
    { header: "เลขที่คำขอ", field: "RequestNumber" },
    { header: "เลขที่บัตรประชาชน", field: "codeID" },
    { header: "ชื่อ-สกุล", field: "name" },
    { header: "ประเภทการยื่นคำขอ", field: "RequestType" },
    { header: "วันที่ยื่นคำขอ", field: "RequestDate" },
    { header: "สถานะคำขอ", field: "RequestStatus" },
    { header: "ช่องทางการยื่นคำขอ", field: "RequestChannel" },
  ];

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Embed Thai font
    // doc.addFileToVFS("THSarabun.ttf", THSarabunBase64);
    // doc.addFont("THSarabun.ttf", "THSarabun", "normal");
    doc.setFont("THSarabun");
    doc.setFontSize(16);

    // Add Title
    doc.text("ตารางการปรับโครงสร้างหนี้", 14, 20);

    // Prepare table data
    const headers = columns.map((col) => col.header);
    const tableData = rows.map((row) =>
      columns.map((col) => row[col.field] || "")
    );

    // Add Table
    doc.autoTable({
      head: [headers],
      body: tableData,
      startY: 30,
      styles: { font: "THSarabun" },
    });

    // Save the PDF
    doc.save("debt_restructure_table.pdf");
  };

  return (
    <div>
      <button onClick={downloadPDF}>ดาวน์โหลด PDF</button>
    </div>
  );
}

export default DebtRestructureForm;
