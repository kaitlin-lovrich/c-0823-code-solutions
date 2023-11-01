import { useState } from 'react';
import './Accordion.css';

type Topics = {
  id: number;
  name: string;
  info: string;
};

type Props = {
  topics: Topics[];
};

export default function Accordion({ topics }: Props) {
  return <ShowTopics topics={topics} />;
}

function ShowTopics({ topics }: Props) {
  const [activePanel, setActivePanel] = useState<number>();

  function handleClick(topicId: number) {
    if (activePanel === topicId) {
      setActivePanel(0);
    } else {
      setActivePanel(topicId);
    }
  }
  const topicNames = topics.map((topic) => {
    return (
      <div>
        <div className="topic-name" onClick={() => handleClick(topic.id)}>
          <li key={topic.id}>{topic.name}</li>
        </div>
        {activePanel === topic.id && (
          <div className="topic-info">
            <li key={topic.name}>{topic.info}</li>
          </div>
        )}
      </div>
    );
  });

  return <ul className="topics">{topicNames}</ul>;
}

// Robert's solulu:
// import { useState } from 'react';
// import './Accordion.css';
// export type Topic = {
//   id: number;
//   title: string;
//   content: string;
// };
// type Props = {
//   topics: Topic[];
// };
// export function Accordion({ topics }: Props) {
//   const [openTopic, setOpenTopic] = useState<Topic>();
//   function handleClick(clickedTopic: Topic) {
//     if (clickedTopic === openTopic) {
//       setOpenTopic(undefined);
//     } else {
//       setOpenTopic(clickedTopic);
//     }
//   }
//   return (
//     <div>
//       {topics.map((topic) => (
//         <TopicCard
//           topic={topic}
//           isOpen={openTopic === topic}
//           onClick={handleClick}
//         />
//       ))}
//     </div>
//   );
// }
// type CardProps = {
//   topic: Topic;
//   isOpen: boolean;
//   onClick: (topic: Topic) => void;
// };
// function TopicCard({ topic, isOpen, onClick }: CardProps) {
//   return (
//     <div className="topic">
//       <div onClick={() => onClick(topic)} className="topic-title">
//         <h3>{topic.title}</h3>
//       </div>
//       {isOpen && <div className="topic-content">{topic.content}</div>}
//     </div>
//   );
// }
