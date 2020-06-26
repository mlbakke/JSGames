const canvas = document.querySelector('.tetris-canvas');
const ctx = canvas.getContext('2d');

const cols = 10;
const rows = 20;
const blockSize = 30;

//canvas width+height
ctx.canvas.width = cols * blockSize;
ctx.canvas.height = rows * blockSize;

// Scale blocks
ctx.scale(blockSize, blockSize);
