import PDFViewer from "../pdffiler/PDFViewer";

const MyPDFPage: React.FC = () => {
  const pdfUrl = '/aviso_de_privacidad_2020.pdf'; // Reemplaza con la URL de tu PDF

  return (
    <div>
      
      <PDFViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default MyPDFPage;
