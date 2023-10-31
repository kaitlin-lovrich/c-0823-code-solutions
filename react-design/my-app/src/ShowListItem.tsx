import './ShowListItem.css';

type ListItemProps = {
  items: Array<string>;
};

export default function ShowListItem({ items }: ListItemProps) {
  return <p id="list-item">{items[0]}</p>;
  // const itemList = items.map((item, index) => {
  //   return (
  //     <div>
  //       <li key={index}>{item}</li>
  //     </div>
  //   );
  // });
  // return <ul id="list-item">{itemList}</ul>;
}
