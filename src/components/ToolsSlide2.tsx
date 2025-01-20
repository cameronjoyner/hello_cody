import React from 'react';
import { Card } from './ui/card';
import { HardHat, PaintRoller, Bot } from 'lucide-react';
import SlideContainer from './SlideContainer';

const AIAtWorkCard = () => (
  <Card className="p-6">
    <div className="flex flex-col items-center space-y-2">
      <HardHat className="h-8 w-8" />
      <h3 className="font-semibold">Github Co-Pilot</h3>
      <p className="text-sm text-gray-500">Our preferred tool at Palantir</p>
    </div>
  </Card>
);

const AIAtHomeCard = () => (
  <Card className="p-6">
    <div className="flex flex-col items-center space-y-2">
      <PaintRoller className="h-8 w-8" />
      <h3 className="font-semibold">Vercel V0 + Cursor</h3>
      <p className="text-sm text-gray-500">My preferred tinkering tools at home</p>
    </div>
  </Card>
);

const ExperimentalAICard = () => (
  <Card className="p-6">
    <div className="flex flex-col items-center space-y-2">
      <Bot className="h-8 w-8" />
      <h3 className="font-semibold">Cody</h3>
      <p className="text-sm text-gray-500">Newest to me, highest impact</p>
    </div>
  </Card>
);

const ToolsSlide2: React.FC = () => {
  return (
    <SlideContainer>
      <AIAtWorkCard />
      <AIAtHomeCard />
      <ExperimentalAICard />
    </SlideContainer>
  );
};

export default ToolsSlide2;