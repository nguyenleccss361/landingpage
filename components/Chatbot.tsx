"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

const quickActions = [
  "help",
  "next stop",
  "agenda",
  "pricing",
  "registration",
  "raptor",
  "compare widths",
  "plan visit",
];

const responses: Record<string, string> = {
  help: "Here are some topics I can help with:\n• Next stop - Find the next roadshow location\n• Agenda - View event schedule\n• Pricing - Get Raptor X pricing information\n• Registration - Register for the roadshow\n• Raptor - Learn about Raptor X features\n• Compare widths - Compare skateboard deck widths\n• Plan visit - Plan your visit to the roadshow",
  "next stop": "The next stops on the Raptor Roadshow 2025:\n• April 7: London Hyde Park\n• April 8: Manchester Platt Fields Park\n• April 9: Birmingham The Wheels Adventure Park\n• April 10: Greenwich-Victoria Park\n• April 11: Liverpool-Wavertree Playground\n\nAll events run from 10:00 AM – 4:30 PM!",
  agenda: "Raptor Roadshow 2025 Schedule:\n\nEach event includes:\n• Product launch and key features demonstration\n• Professional skater performances\n• Hands-on Raptor testing sessions\n• Interactive activities and Q&A\n• Meet the team and pro skaters\n• Exclusive gifts & 20% OFF offers\n\nCheck the event schedule section for detailed information!",
  pricing: "Raptor X Pricing:\n\nLimited Edition Offer:\n• Regular Price: £221\n• Special Price: £177 (20% OFF)\n• Includes exclusive gift!\n\nOrder now to secure your Raptor X skateboard!",
  registration: "To register for the Raptor Roadshow:\n\n1. Scroll down to the registration form\n2. Fill in your details (Name, Email, Phone)\n3. Select how you heard about us\n4. Click 'Send' to submit\n\nYou can also register at any roadshow location on the day!",
  raptor: "Raptor X Features:\n\n• Reinforced Deck: Eco-friendly bamboo and maple for strength\n• Precision Trucks: Smooth turns and superior control\n• Advanced Wheels: Shock-absorbing for all terrains\n• Custom Graphics: Unique urban art designs\n• Lightweight Build: Durable and portable\n\nLimited edition—get yours today!",
  "compare widths": "Raptor X Deck Specifications:\n\n• Standard width: Optimized for all skill levels\n• Length: Standard skateboard dimensions\n• Material: Bamboo and maple composite\n• Weight: Lightweight for easy portability\n\nPerfect balance of stability and maneuverability!",
  "plan visit": "Planning your visit:\n\n• Location: Check the event schedule for your city\n• Time: 10:00 AM – 4:30 PM\n• What to bring: Just yourself! We provide test boards\n• Activities: Try Raptor X, watch pro skaters, meet the team\n• Offers: Get 20% OFF on Raptor X at the event\n\nSee you there!",
};

function getBotResponse(input: string): string {
  const lowerInput = input.toLowerCase().trim();
  
  // Check for exact matches first
  if (responses[lowerInput]) {
    return responses[lowerInput];
  }
  
  // Check for partial matches
  for (const [key, value] of Object.entries(responses)) {
    if (lowerInput.includes(key)) {
      return value;
    }
  }
  
  // Default responses
  if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
    return "Hello! Welcome to SCATERS - The Raptor Roadshow assistant. How can I help you today?";
  }
  
  if (lowerInput.includes("thank")) {
    return "You're welcome! Feel free to ask if you need any more information about the Raptor Roadshow.";
  }
  
  return "I'm here to help with information about the Raptor Roadshow 2025. Try asking about:\n• Next stop locations\n• Event agenda\n• Pricing\n• Registration\n• Raptor X features\n\nOr type 'help' for more options!";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to SCATERS - The Raptor Roadshow assistant",
      sender: "bot",
      timestamp: new Date(),
    },
    {
      id: "2",
      text: "Type help to see topics, or ask a question like next stop or raptor specs.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 500);
  };

  const handleQuickAction = (action: string) => {
    handleSend(action);
  };

  const handleReset = () => {
    setMessages([
      {
        id: "1",
        text: "Welcome to SCATERS - The Raptor Roadshow assistant",
        sender: "bot",
        timestamp: new Date(),
      },
      {
        id: "2",
        text: "Type help to see topics, or ask a question like next stop or raptor specs.",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999]">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-5 shadow-xl hover:shadow-2xl transition-all hover:scale-110 relative group w-14 h-14 md:w-16 md:h-16 flex items-center justify-center"
          aria-label="Open chatbot"
        >
          {/* Subtle pulsing ring effect - only on hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-30 group-hover:animate-ping transition-opacity"></div>
          {/* Subtle glow effect */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 relative z-10 drop-shadow-lg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] w-[calc(100vw-2rem)] md:w-[90vw] max-w-md h-[calc(100vh-8rem)] md:h-[600px] max-h-[600px] bg-gray-900 rounded-lg shadow-2xl flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">ROADSHOW ASSISTANT</h3>
            <p className="text-gray-400 text-xs">SCATERS - The Raptor Roadshow • UK 2026</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => handleQuickAction("help")}
            className="px-3 py-1 bg-gray-700 text-white text-xs rounded hover:bg-gray-600 transition-colors"
          >
            Help
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1 bg-gray-700 text-white text-xs rounded hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="px-3 py-1 bg-gray-700 text-white text-xs rounded hover:bg-gray-600 transition-colors"
          >
            ×
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900">
        <div className="text-center text-gray-500 text-xs py-2 border-b border-gray-800">
          TODAY
        </div>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.sender === "user"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "bg-gray-700 text-gray-100"
              }`}
            >
              <p className="text-sm whitespace-pre-line">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">{formatTime(message.timestamp)}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-700 text-gray-100 rounded-lg px-4 py-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Scroll to latest button */}
      <div className="px-4 py-2 border-t border-gray-800">
        <button
          onClick={scrollToBottom}
          className="w-full py-1.5 bg-gray-800 text-gray-300 text-xs rounded hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          Scroll to latest
        </button>
      </div>

      {/* Quick actions */}
      <div className="px-4 py-2 border-t border-gray-800 bg-gray-800">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {quickActions.map((action) => (
            <button
              key={action}
              onClick={() => handleQuickAction(action)}
              className="px-3 py-1.5 bg-gray-700 text-gray-200 text-xs rounded whitespace-nowrap hover:bg-gray-600 transition-colors flex-shrink-0"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-gray-800 bg-gray-800 flex gap-2">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Type..."
          className="flex-1 bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={() => handleSend()}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
