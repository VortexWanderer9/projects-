setInterval(() => {
  if (document.title === '✨ 100 Project Ideas ✨') {
    document.title = '💡 Give it try 💡';
  } else {
    document.title = '✨ 100 Project Ideas ✨';
  }
}, 5000);

//
const targe = {x:0,y:0}
    for (let i = 0; i < 20; i++) {
      const dot = document.createElement("div");
      dot.className = "child";
      document.body.appendChild(dot)
    }

    const children = document.querySelectorAll(".child");

    // Mousemove event listener
    const colors = [
        "#ffe17d", // Bright yellow
        "#ffdb6d", // Soft yellow
        "#ffd65e", // Pale gold
        "#ffc857", // Golden yellow
        "#fcb35d", // Peach
        "#f8a16e", // Warm coral
        "#f4897e", // Soft red-orange
        "#f27292", // Light pink
        "#eb5ca4", // Vibrant pink
        "#d94fb5", // Magenta
        "#c845c7", // Bright purple
        "#b23ad8", // Purple
        "#9831df", // Soft violet
        "#842be5", // Violet
        "#6d23eb", // Rich purple-blue
        "#551ce8", // Deep indigo
        "#4517e3", // Indigo
        "#3312d7", // Deep blue-violet
        "#260ebf", // Dark blue
        "#200cb3", // Navy blue
        "#15098a", // Deep navy
        "#0f076e"  // Midnight blue
      ];
      
children.forEach((child, index) =>{
    child.x = 0
    child.y = 0
    child.style.backgroundColor = colors[index % colors.length]
})
    window.addEventListener("mousemove", (e) => {
     targe.x = e.clientX;
     targe.y = e.clientY;

    });


    function animation(){
        let x = targe.x
        let y = targe.y

        
      children.forEach((child, index) => {

        child.style.left = x - 12 + "px" ;
        child.style.top = y - 12 + 'px' ;
        child.style.scale = (children.length - index) / children.length
        child.x = x
        child.y = y
        const nextChild = children[index + 1 ] || children[0]
        x+= (nextChild.x - x) * 0.3
        y+= (nextChild.y - y) * 0.3
      });

      requestAnimationFrame(animation)
    }
    animation()



    



