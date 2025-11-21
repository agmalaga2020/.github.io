import React from 'react';
import { X } from 'lucide-react';

const PDFModal = ({ isOpen, onClose, pdfUrl, title }) => {
  if (!isOpen) return null;

  // Convert raw GitHub URL to Google Docs Viewer URL for proper rendering
  const getViewerUrl = (url) => {
    if (!url) return '';
    // If it's already a Google Docs Viewer URL, use it as-is
    if (url.includes('docs.google.com/viewer')) {
      return url;
    }
    // Otherwise, wrap it with Google Docs Viewer
    return `https://docs.google.com/viewer?url=${encodeURIComponent(url)}`;
  };

  const viewerUrl = getViewerUrl(pdfUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full h-full max-w-7xl max-h-[95vh] m-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="w-full h-[calc(100%-4rem)]">
          <iframe
            src={viewerUrl}
            className="w-full h-full"
            title={title}
            allow="fullscreen"
          />
        </div>
      </div>
    </div>
  );
};

export default PDFModal;
