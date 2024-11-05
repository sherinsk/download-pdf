import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const DownloadDivAsPDF = () => {
  const divRef = useRef(); // Create a reference for the div to be downloaded as PDF

  const handleDownload = () => {
    const element = divRef.current; // Get the div element to convert to PDF
    const options = {
      margin: 1,
      filename: 'download.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    // Use html2pdf to convert the div to PDF
    html2pdf().from(element).set(options).save();
  };

  return (
    <div>
      {/* This is the div to be downloaded as PDF */}
      <div ref={divRef} style={{ padding: '20px', border: '1px solid black', width: '400px', color:'black' }}>
        <h2>Download This Div as PDF</h2>
        <p>This is some content inside the div that will be downloaded as a PDF.</p>
      </div>

      {/* Button to trigger PDF download */}
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default DownloadDivAsPDF;
