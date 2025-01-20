import React from 'react';
import { Card } from './ui/card';
import { Pickaxe, PanelsTopLeft, KeyboardIcon } from 'lucide-react';
import SlideContainer from './SlideContainer';

const TypingGameCard = () => (
  <Card className="p-6">
    <div className="flex flex-col items-center space-y-2">
      <KeyboardIcon className="h-8 w-8" />
      <h3 className="font-semibold">Typing Game</h3>
      <p className="text-sm text-gray-500">An ongoing project for my younger cousins in Kindergarten</p>
    </div>
  </Card>
);

const SlideShowCard = () => (
    <Card className="p-6">
      <div className="flex flex-col items-center space-y-2">
        <PanelsTopLeft className="h-8 w-8" />
        <h3 className="font-semibold">This slideshow app</h3>
        <p className="text-sm text-gray-500">This current communication medium was built using Cody</p>
      </div>
    </Card>
  );

const CodyContributionCard = () => (
  <Card className="p-6">
    <div className="flex flex-col items-center space-y-2">
      <Pickaxe className="h-8 w-8" />
      <h3 className="font-semibold">Cody Contribution</h3>
      <p className="text-sm text-gray-500">Fixing a UI bug that was bothering me in the side panel chat</p>
    </div>
  </Card>
);


const ExperimentsSlide3: React.FC = () => {
  return (
    <SlideContainer>
      <TypingGameCard />
      <SlideShowCard />
      <CodyContributionCard />
    </SlideContainer>
  );
};

export default ExperimentsSlide3;