import type { Topic } from './Accordion';

type TopicProps = {
  topic: Topic;
  isOpen: boolean;
  onCustomClick: (topicId: number) => void;
};

export function TopicCard({ topic, isOpen, onCustomClick }: TopicProps) {
  return (
    <div className="topic">
      <div className="topic-title" onClick={() => onCustomClick(topic.id)}>
        <h3>{topic.title}</h3>
      </div>
      {isOpen && <div className="topic-content">{topic.content}</div>}
    </div>
  );
}
