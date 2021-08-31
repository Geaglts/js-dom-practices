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

  const SCROLL_DISTANCE = 9;
  const scrollToLeft = () => {
    if (scrollPosition <= 0) {
      scrollPosition = 0;
    } else {
      scrollPosition -= SCROLL_DISTANCE;
    }
    list.scrollTo(scrollPosition, 0);
  };

  const scrollToRight = () => {
    const realListWidth = list.scrollWidth - list.clientWidth;
    scrollPosition += SCROLL_DISTANCE;
    if (scrollPosition > realListWidth) {
      scrollPosition = realListWidth;
    }
    list.scrollTo(scrollPosition, 0);
  };

  btnIzquierda.addEventListener("click", scrollToLeft);
  btnDerecha.addEventListener("click", scrollToRight);

  const side = { position: 0, str: "" };
  let isMouseDown = false;
  list.addEventListener("mousedown", () => {
    isMouseDown = true;
  });
  list.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  list.addEventListener("mousemove", (evt) => {
    if (isMouseDown) {
      const { clientX } = evt;
      if (clientX > side.position) {
        scrollToLeft();
        side.position = clientX;
        side.str = "Derecha";
      } else {
        scrollToRight();
        side.position = clientX;
        side.str = "Izquierda";
      }
    }
  });
}

function main() {
  moveSquare();
  scrollClick();
}

main();
