import { useState } from 'react';
import { TopicCard } from './TopicCard';

export type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  const [openTopic, setOpenTopic] = useState<number | undefined>();

  function handleClick(topicId: number) {
    setOpenTopic(openTopic === topicId ? undefined : topicId);
  }
  return (
    <div>
      {topics.map((topic) => (
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
