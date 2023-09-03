var canvas = document.getElementById("overlay");
var ctx = canvas.getContext("2d");
for (let y=0; y<64; ++y) {
  for (let x=0; x<64; ++x) {
    if((x + y) % 2 == 0) {
      ctx.fillStyle = "blue";
    } else {
      ctx.fillStyle = "red";
    }
    ctx.fillRect(x * canvas.width / 64.0, y * canvas.height / 64.0, canvas.width / 64.0, canvas.height / 64.0);
  }
}

