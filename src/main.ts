import van from 'vanjs-core';
import { speeders } from './const';
import { foo } from './styles.css';

const { button, div, pre } = van.tags;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Run(sleepMs: number, label: string) {
  const headingSpaces = van.state(40);
  const trailingUnderscores = van.state(0);

  const animate = async () => {
    while (headingSpaces.val > 0) {
      await sleep(sleepMs);
      --headingSpaces.val, ++trailingUnderscores.val;
    }
  };
  animate();

  return div(
    pre(
      () =>
        `${' '.repeat(headingSpaces.val)}${label}Hello VanJS!${'_'.repeat(
          trailingUnderscores.val
        )}`
    )
  );
}

const Hello = () => {
  const dom = div();
  const Button = (sleepMs: number, label: string) => {
    return button(
      {
        class: foo,
        onclick: () => van.add(dom, Run(sleepMs, label)),
      },
      `Hello ${label}`
    );
  };

  return div(
    dom,
    ...speeders.map(({ sleepMs, label }) => Button(sleepMs, label))
  );
};

van.add(document.body, Hello());
