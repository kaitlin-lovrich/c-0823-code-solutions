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
  const topicNames = topics.map((topic) => {
    return (
      <>
        <div className="topic-name">
          <li key={topic.id}>{topic.name}</li>
        </div>
        <div className="topic-info">
          <li key={topic.id}>{topic.info}</li>
        </div>
      </>
    );
  });

  return <ul className="topics">{topicNames}</ul>;
}
