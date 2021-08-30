function moveSquare() {
  let isDown = false;
  let offSet = [0, 0];
  // const container = document.querySelector("#app");
  const moveContainer = document.querySelector("#move");
  const square = document.querySelector(".square");
  const moveContainerWidth = moveContainer.offsetWidth - square.offsetWidth;
  const moveContainerHeight = moveContainer.offsetHeight - square.offsetHeight;
  square.addEventListener("mousedown", (event) => {
    isDown = true;
    offSet = [
      square.offsetLeft - event.clientX,
      square.offsetTop - event.clientY,
    ];
  });
  document.addEventListener("mouseup", () => {
    isDown = false;
  });
  document.addEventListener("mousemove", (event) => {
    event.preventDefault();
    if (isDown) {
      const mousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
      const { x, y } = mousePosition;
      const [currentX, currentY] = offSet;
      square.style.left = `${
        x + currentX > 0
          ? x + currentX > moveContainerWidth
            ? moveContainerWidth
            : x + currentX
          : 0
      }px`;
      square.style.top = `${
        y + currentY > 0
          ? y + currentY > moveContainerHeight
            ? moveContainerHeight
            : y + currentY
          : 0
      }px`;
    }
  });
}

function scrollClick() {
  const list = document.querySelector("#scrollClickList");
  const btnIzquierda = document.querySelector("#paca");
  const btnDerecha = document.querySelector("#paya");
  let scrollPosition = 0;

  list.addEventListener("scroll", (event) => {
    scrollPosition = event.target.scrollLeft;
  });

  const scrollToLeft = (event) => {
    console.log("scrollToLeft");
    scrollPosition -= 30;
    list.scrollTo(scrollPosition, 0);
    console.log(scrollPosition);
  };

  const scrollToRight = (event) => {
    console.log("scrollToRight");
    scrollPosition += 30;
    list.scrollTo(scrollPosition, 0);
    console.log(scrollPosition);
  };

  btnIzquierda.addEventListener("click", scrollToLeft);
  btnDerecha.addEventListener("click", scrollToRight);
}

function main() {
  moveSquare();
  scrollClick();
}

main();
