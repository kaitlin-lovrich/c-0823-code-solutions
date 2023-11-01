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
