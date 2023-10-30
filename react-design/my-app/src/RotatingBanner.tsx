type RotatingBannerProps = {
  items: Array<string>;
};
export default function RotatingBanner({ items }: RotatingBannerProps) {
  const index = 0;

  const itemList = items.map((item) => {
    return <li key={index}>{item}</li>;
  });
  return <ul>{itemList}</ul>;
}
