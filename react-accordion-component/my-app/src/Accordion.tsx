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
  const [showInfo, setShowInfo] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState();

  console.log(setSelectedTopic);
  function handleClick() {
    setShowInfo(!showInfo);
    // setSelectedTopic(e.currentTarget);
    // if (e.currenttarget === selectedTopic) {
    //   setShowInfo(!showInfo);
    // } else {
    //   setSelectedTopic(e.currentTarget);
    // }

    console.log(selectedTopic);
  }

  const topicNames = topics.map((topic) => {
    return (
      <div>
        <div className="topic-name" onClick={handleClick}>
          <li key={topic.id}>{topic.name}</li>
        </div>
        <div className={showInfo ? 'topic-info' : 'hidden'}>
          <li key={topic.name}>{topic.info}</li>
        </div>
      </div>
    );
  });

  return <ul className="topics">{topicNames}</ul>;
}
