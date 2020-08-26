$(document).ready(function () {
  //   function freshDot() {
  //     this.obj = document.createElement("div");
  //     this.obj.classList.add("stars");
  //     this.obj.style.top = window.innerHeight * Math.random();
  //     this.obj.style.left = window.innerWidth * Math.random();
  //     this.size = Math.floor(Math.random()) + 2;
  //     this.obj.style.height = this.size;
  //     this.obj.style.width = this.size;

  //     document.body.appendChild(this.obj);
  //   }
  var dot = [];
  for (var i = 0; i < 100; i++) {
    dot.push(new freshDot());
  }
});
