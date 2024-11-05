import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';

const DownloadDivAsPDF = () => {
  const divRef = useRef(); // Create a reference for the div to be downloaded as PDF

  const handleDownload = () => {
    const element = divRef.current; // Get the div element to convert to PDF

    // Create a new jsPDF instance (portrait, A4 size)
    const pdf = new jsPDF('p', 'mm', 'a4');

    // Set page margins (optional)
    const margin = 10; // margin in mm
    const x = margin;
    const y = margin;

    // Use the jsPDF html method to directly convert the div into a PDF
    pdf.html(element, {
      callback: function (doc) {
        doc.save('download.pdf'); // Save the PDF
      },
      x: x, // Start position for the content on the x-axis
      y: y, // Start position for the content on the y-axis
      html2canvas: { scale: 2 }, // Higher scale to improve quality (optional)
      autoPaging: true, // Automatically handle page breaks if the content overflows
    });
  };

  return (
    <div>
      {/* This is the div to be downloaded as PDF */}
      <div
        ref={divRef}
        style={{
          padding: '8px',
          border: '1px solid black',
          width: '100%', // Ensure the div scales with the page
          color: 'black',
          fontFamily: 'Arial, sans-serif',
          fontSize: '5px',
        }}
      >
        <h2 style={{ color: 'blue', fontSize: '5px' }}>Download This Div as PDF</h2>
        <p>This is some content inside the div that will be downloaded as a PDF.</p>
        <p style={{ fontStyle: 'italic' }}>This is italicized text.</p>
        <p style={{ fontWeight: 'bold' }}>This is bold text.</p>
        <p style={{ textDecoration: 'underline' }}>This is underlined text.</p>
      </div>

      {/* Button to trigger PDF download */}
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default DownloadDivAsPDF;
