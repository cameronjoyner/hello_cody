import React from 'react';
import { Card } from './ui/card';
import { Car, Codesandbox } from 'lucide-react';
import SlideContainer from './SlideContainer';

const CognitiveLoadCard = () => (
  <Card className="p-6">
    <div className="flex flex-col items-center space-y-2">
      <Codesandbox className="h-8 w-8" />
      <h3 className="font-semibold">Highest cognitive load</h3>
      <p className="text-sm text-gray-500">Finetuning to reach full potential of the product</p>
    </div>
  </Card>
);

const PayoffCard = () => (
  <Card className="p-6">
    <div className="flex flex-col items-center space-y-2">
      <Car className="h-8 w-8" />
      <h3 className="font-semibold">Largest pay off</h3>
      <p className="text-sm text-gray-500">Nissan Rental vs. Manual Transmission Ferrari</p>
    </div>
  </Card>
);

const HighLevelSlide1: React.FC = () => {
  return (
    <SlideContainer>
      <PayoffCard />
      <CognitiveLoadCard />
    </SlideContainer>
  );
};

export default HighLevelSlide1;