import { Document } from "react-pdf";
interface PDFProps {
  title: string;
  filePath: string;
}

export default function PDFViewer({ title, filePath }: PDFProps) {
  return (
    <>
      <div>
        <h1>{title} </h1>
        <Document file={filePath} />
      </div>
    </>
  );
}
