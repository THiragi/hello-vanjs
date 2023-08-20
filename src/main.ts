import van from 'vanjs-core';

const { button, div, pre } = van.tags;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Run = ({ sleepMs }: { sleepMs: number }) => {
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
        `${' '.repeat(headingSpaces.val)}🚐💨Hello VanJS!${'_'.repeat(
          trailingUnderscores.val
        )}`
    )
  );
};

const Hello = () => {
  const dom = div();
  const Button = (sleepMs: number, label: string) => {
    return button(
      {
        class: 'btn',
        onclick: () => van.add(dom, Run({ sleepMs })),
      },
      label
    );
  };
  return div(
    dom,
    Button(2000, 'Hello 🐌'),
    Button(500, 'Hello 🐢'),
    Button(100, 'Hello 🚶'),
    Button(10, 'Hello 🏎️'),
    Button(2, 'Hello 🚀')
  );
};

van.add(document.body, Hello());
