import { useState } from 'react';
import { TopicCard } from './TopicCard';

export interface Topic {
  id: number;
  title: string;
  content: string;
}

interface Props {
  topic: Topic[];
}

export function Accordion({ topic }: Props) {
  const [openTopic, setOpenTopic] = useState<number | undefined>();

  function handleClick(topicId: number) {
    setOpenTopic(openTopic === topicId ? undefined : topicId);
  }
  return (
    <div>
      {topic.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isOpen={openTopic === topic.id}
          onCustomClick={handleClick}
        />
      ))}
    </div>
  );
}
