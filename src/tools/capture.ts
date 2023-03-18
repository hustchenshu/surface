import html2canvas from 'html2canvas';

export function capture() {
  return html2canvas(document.body).then((canvas) => {
    document.body.appendChild(canvas);
    const img = new Image();
    img.src = canvas.toDataURL('image/jpg', 100);
    return img.src;
  });
}
