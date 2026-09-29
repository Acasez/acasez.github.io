export default function SwedishCV() {
  return (
    <>
      <object
        data="CVs/SwedishCV.pdf"
        width="100%"
        height="600px"
        type="application/pdf"
      >
        <p>
          Your browser doesn’t support PDFs. Please download the PDF to view it:{" "}
          <a href="/your-pdf-url.pdf">Download PDF</a>.
        </p>
      </object>
    </>
  );
}
