import React from 'react';
import { Card } from './ui/card';
import { Bot, MessageSquare, Settings } from 'lucide-react';
import SlideContainer from './SlideContainer';

const AIAssistantCard = () => (
  <Card className="p-6">
    <div className="flex flex-col items-center space-y-2">
      <Bot className="h-8 w-8" />
      <h3 className="font-semibold">AI Assistant</h3>
      <p className="text-sm text-gray-500">Intelligent help powered by advanced AI models</p>
    </div>
  </Card>
);

const ChatInterfaceCard = () => (
  <Card className="p-6">
    <div className="flex flex-col items-center space-y-2">
      <MessageSquare className="h-8 w-8" />
      <h3 className="font-semibold">Chat Interface</h3>
      <p className="text-sm text-gray-500">Interactive messaging system for seamless communication</p>
    </div>
  </Card>
);

const ConfigurationCard = () => (
  <Card className="p-6">
    <div className="flex flex-col items-center space-y-2">
      <Settings className="h-8 w-8" />
      <h3 className="font-semibold">Configuration</h3>
      <p className="text-sm text-gray-500">Customize settings to match your preferences</p>
    </div>
  </Card>
);

const AssistantsSlide4: React.FC = () => {
  return (
    <SlideContainer>
      <AIAssistantCard />
      <ChatInterfaceCard />
      <ConfigurationCard />
    </SlideContainer>
  );
};

export default AssistantsSlide4;
