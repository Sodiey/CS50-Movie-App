import scrollInto, { Options } from "scroll-into-view-if-needed";

const elements = {
  navigationHeightDesktop: "60px",
};

const defaultScrollIntoViewOptions: Options & { delta?: string | number } = {
  block: "nearest",
  behavior: "smooth",
  scrollMode: "if-needed",
};

const scrollIntoViewIfNeeded = (
  target: HTMLElement,
  options: Options & { delta?: string | number } = {
    delta: `-${elements.navigationHeightDesktop} - 3vh`,
  }
) => {
  if (!target) {
    return;
  }
  let realTarget = target;
  let shift: string = null;
  const {
    delta = null,
    block = defaultScrollIntoViewOptions.block,
    behavior = defaultScrollIntoViewOptions.behavior,
    scrollMode = defaultScrollIntoViewOptions.scrollMode,
  } = options || {};

  if (typeof delta === "string") {
    const top =
      block === "end"
        ? target.offsetHeight + target.offsetTop
        : target.offsetTop;
    const value = delta
      .replace(/ /g, "")
      .replace(/\-/g, " - ")
      .replace(/\+/g, " + ");
    const operator = value.startsWith(" -") ? "" : " + ";
    shift = `calc(${top}px ${operator} ${value})`;
  } else if (typeof delta === "number") {
    const top = target.offsetTop;
    shift = `${top + delta}px`;
  }
  if (shift) {
    const div = document.createElement("div");
    const { style } = div;
    style.height = "1px";
    style.width = "1px";
    style.top = top + "px";
    style.position = "absolute";
    style.top = shift;
    const parent = target.offsetParent || target.parentNode;
    parent.appendChild(div);
    realTarget = div;
    setTimeout(() => parent.removeChild(div), 3000);
  }

  scrollInto(realTarget, { block, behavior, scrollMode });
};
export default scrollIntoViewIfNeeded;
