
type BlobDown = (data: Blob, fileName: string) => void;

const blobDown: BlobDown = (data, fileName) => {
  const blob = new Blob([data]);
  const downloadElement: HTMLAnchorElement = document.createElement('a');
  const href: string = window.URL.createObjectURL(blob);
  downloadElement.href = href;
  downloadElement.download = fileName;
  document.body.appendChild(downloadElement);
  downloadElement.click();
  document.body.removeChild(downloadElement);
  window.URL.revokeObjectURL(href);
};

export default blobDown;
