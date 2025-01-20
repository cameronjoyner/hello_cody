import React from 'react';
import { Card } from './ui/card';
import { Blocks, Dog } from 'lucide-react';
import SlideContainer from './SlideContainer';

const DogFoodingCard = () => (
  <Card className="p-6">
    <div className="flex flex-col items-center space-y-2">
      <Dog className="h-8 w-8" />
      <h3 className="font-semibold">Dog-fooding</h3>
      <p className="text-sm text-gray-500">Who are the power users inside of Sourcegraph? What are they doing with Cody that’s not obvious to a new users?
      </p>
    </div>
  </Card>
);

const StartupsCard = () => (
  <Card className="p-6">
    <div className="flex flex-col items-center space-y-2">
      <Blocks className="h-8 w-8" />
      <h3 className="font-semibold">Missing Pieces</h3>
      <p className="text-sm text-gray-500">How do you get Cody out to startups before their repos run wild? How do you you treat them as future enterprise customers?</p>
    </div>
  </Card>
);

const QuesitonsForBuildersSlide9: React.FC = () => {
  return (
    <SlideContainer>
      <DogFoodingCard />
      <StartupsCard />
    </SlideContainer>
  );
};

export default QuesitonsForBuildersSlide9;