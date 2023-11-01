import { Topics } from './App';

type AccordionProps = {
  topics: object[];
};

export default function Accordion({ topics }: AccordionProps) {
  return <Topics topics={topics} />;
}

type TopicsProps = {
  topics: Topics[];
};

function Topics({ topics }: TopicsProps) {
  const topicNames = topics.map((topic) => {
    return <li key={topic.id}>{topic.name}</li>;
  });

  return (
    <div>
      <ul>{topicNames}</ul>
    </div>
  );
}
