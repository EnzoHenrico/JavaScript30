function create(){

  // get html elements
  const canvas = document.getElementById('draw');
  const context = canvas.getContext('2d');
  const strokeStyle = document.getElementById('color-picker');
  const lineWidth = document.getElementById('line-thickness');
  const eraser = document.getElementById('eraser');
  const pen = document.getElementById('pen');

  
  //set canvas size
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  strokeStyle.addEventListener('change', () => context.strokeStyle = strokeColor.value);
  lineWidth.addEventListener('change', () => context.lineWidth = lineWidth.value);

  context.lineJoin = 'round';
  context.lineCap = 'round';

  // flags
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  function draw(e){
    if(!isDrawing) return;

    // create linestroke pathing
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();

    // set flags
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  canvas.addEventListener('mousedown', (e) => {
    // set flags
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
  });
  canvas.addEventListener('mouseup', (e) => {
    // set flags
    isDrawing = false;
    [lastX, lastY] = [e.offsetX, e.offsetY]
  });
  
  eraser.addEventListener('click', () => context.globalCompositeOperation = 'destination-out');
  pen .addEventListener('click', () => context.globalCompositeOperation = 'source-over')
  canvas.addEventListener('mouseout', () => isDrawing = false);
  canvas.addEventListener('mousemove', draw);
}