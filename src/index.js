const blessed = require("blessed");

const screen = blessed.screen({
  smartCSR: true,
});

screen.title = "Title";

const box = blessed.box({
  top: "center",
  left: "center",
  width: "50%",
  height: "50%",
  content: " Test{bold}ing{/bold}",
  tags: true,
  border: {
    type: "line",
  },
  style: {
    fg: "black",
    bg: "yellow",
    border: {
      fg: "#f00",
    },
    hover: {
      bg: "green",
    },
  },
});

screen.append(box);

screen.key(["escape", "q", "C-c"], (ch, key) => {
  return process.exit(0);
});

box.focus();
screen.render();
