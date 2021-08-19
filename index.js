function main() {
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

main();
