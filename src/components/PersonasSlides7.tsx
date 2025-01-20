import React from 'react';
import { Card } from './ui/card';
import { Zap, Rainbow } from 'lucide-react';
import SlideContainer from './SlideContainer';

const CurrentPowerUserCard = () => (
  <Card className="p-6">
    <div className="flex flex-col items-center space-y-2">
      <Zap className="h-8 w-8" />
      <h3 className="font-semibold">Technical Power Users</h3>
      <p className="text-sm text-gray-500">Where are engineers currently getting the very most out of the product?</p>
    </div>
  </Card>
);

const FuturePowerUserCard = () => (
  <Card className="p-6">
    <div className="flex flex-col items-center space-y-2">
      <Rainbow className="h-8 w-8" />
      <h3 className="font-semibold">Up-levelers</h3>
      <p className="text-sm text-gray-500">What non-technical coworkers are feeling enabled in new ways and how are they being considered?</p>
    </div>
  </Card>
);

const PersonasSlides7: React.FC = () => {
  return (
    <SlideContainer>
      <CurrentPowerUserCard />
      <FuturePowerUserCard />
    </SlideContainer>
  );
};

export default PersonasSlides7;