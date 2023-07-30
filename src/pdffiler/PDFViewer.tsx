import { useEffect, useRef } from 'react';


interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.src = pdfUrl;
    }
  }, [pdfUrl]);

  

  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
      <iframe
        ref={iframeRef}
        title="PDF Viewer"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
      
    </div>
  );
};

export default PDFViewer;
