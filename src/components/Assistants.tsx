import React from 'react';
import { Card } from './ui/card';
import { Bot, MessageSquare, Settings } from 'lucide-react';

const Assistants: React.FC = () => {
    return (
        <div className="grid grid-cols-3 gap-6 text-center">
            <Card className="p-6">
                <div className="flex flex-col items-center space-y-2">
                    <Bot className="h-8 w-8" />
                    <h3 className="font-semibold">AI Assistant</h3>
                    <p className="text-sm text-gray-500">Intelligent help powered by advanced AI models</p>
                </div>
            </Card>
            <Card className="p-6">
                <div className="flex flex-col items-center space-y-2">
                    <MessageSquare className="h-8 w-8" />
                    <h3 className="font-semibold">Chat Interface</h3>
                    <p className="text-sm text-gray-500">Interactive messaging system for seamless communication</p>
                </div>
            </Card>
            <Card className="p-6">
                <div className="flex flex-col items-center space-y-2">
                    <Settings className="h-8 w-8" />
                    <h3 className="font-semibold">Configuration</h3>
                    <p className="text-sm text-gray-500">Customize settings to match your preferences</p>
                </div>
            </Card>
        </div>    );
};

export default Assistants;