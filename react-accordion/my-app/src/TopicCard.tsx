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
      <div className={`topic-content ${isOpen ? 'open' : ''}`}>
        <p>{topic.content}</p>
      </div>
    </div>
  );
}
