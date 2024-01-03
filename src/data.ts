
type Value = {
  id: number;
  title: string;
  subtitle: string;
  img: string;
};

type Values = Value[];

export const values: Values = [
  {
    id: 1,
    title: "Be Good, Be Fair",
    subtitle:
      "Be good, do the right thing by treating people with compassion.",
    img: "/images/values1.png"
  },
  {
    id: 2,
    title: "Speed Is Our Currency",
    subtitle:
      "Our organizational speed, behind-the-scenes, enables fast yet safe delivery.",
    img: "/images/values2.png"
  },
  {
    id: 3,
    title: "Be Real, Speak Your Mind",
    subtitle:
      "Just be genuine. Bring your real self to work.",
    img: "/images/values3.png"
  },
  {
    id: 4,
    title: "Act Like You Own It",
    subtitle:
      "Approach issues and challenges with ownership but also as a team.",
    img: "/images/values4.png"
  },
  {
    id: 5,
    title: "Don't Accept Mediocrity",
    subtitle:
      "Don’t accept average in yourself or in others.",
    img: "/images/values5.png"
  },
  {
    id: 6,
    title: "Write The Ending First",
    subtitle:
      "Imagine a great customer experience. Decide upon a business objective.",
    img: "/images/values6.png"
  },
];
