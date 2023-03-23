import html2canvas from 'html2canvas';

export function capture(needDownload = false) {
  return html2canvas().then((canvas) => {
    const base64Data = canvas.toDataURL('image/jpg', 100);
    if (needDownload) {
      const a = document.createElement('a');
      a.setAttribute('href', base64Data);
      a.setAttribute('download', 'pic.jpg');
      // a.setAttribute('target', '_blank')
      // clickEvent.initEvent('click', true, true);
      document.body.appendChild(a);
      a.click();
    }
    return base64Data;
  });
}
