import './Banner.css';

type BannerProps = {
  items: Array<string>;
};

export default function Banner({ items }: BannerProps) {
  const itemList = items.map((item, index) => {
    return (
      <div>
        <li key={index}>{item}</li>
      </div>
    );
  });
  return <ul>{itemList}</ul>;
}
