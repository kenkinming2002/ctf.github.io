var canvas = document.getElementById("overlay");
var ctx = canvas.getContext("2d");
for (let y=0; y<16; ++y) {
  for (let x=0; x<16; ++x) {
    if((x + y) % 2 == 0) {
      ctx.fillStyle = "blue";
    } else {
      ctx.fillStyle = "red";
    }
    ctx.fillRect(x * canvas.width / 16.0, y * canvas.height / 16.0, canvas.width / 16.0, canvas.height / 16.0);
  }
}

