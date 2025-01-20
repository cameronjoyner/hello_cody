import React from 'react';
import { Card } from './ui/card';
import { Brain, Lightbulb } from 'lucide-react';
import SlideContainer from './SlideContainer';

const AhHaMomentCard = () => (
  <Card className="p-6">
    <div className="flex flex-col items-center space-y-2">
      <Lightbulb className="h-8 w-8" />
      <h3 className="font-semibold">Breakthroughs</h3>
      <p className="text-sm text-gray-500">When was your `ah ha` moment? If you shared it with a coworker, how did you explain it?</p>
    </div>
  </Card>
);

const MissingPiecesCard = () => (
  <Card className="p-6">
    <div className="flex flex-col items-center space-y-2">
      <Brain className="h-8 w-8" />
      <h3 className="font-semibold">Missing Pieces</h3>
      <p className="text-sm text-gray-500">What should you have known in the first week of using Cody that you now know?</p>
    </div>
  </Card>
);

const QuestionsForUsersSlide8: React.FC = () => {
  return (
    <SlideContainer>
      <AhHaMomentCard />
      <MissingPiecesCard />
    </SlideContainer>
  );
};

export default QuestionsForUsersSlide8;