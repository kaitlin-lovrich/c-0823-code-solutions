import './ShowListItem.css';

type ListItemProps = {
  items: Array<string>;
  index: number;
};

export default function ShowListItem({ items, index }: ListItemProps) {
  return <div id="list-item">{items[index]}</div>;
}
