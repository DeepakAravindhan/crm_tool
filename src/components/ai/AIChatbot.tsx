"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, CheckCircle2 } from "lucide-react";
import { useChatStore } from "@/store/useChatStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AIChatbot() {
  const { isOpen, toggleChat, messages, addMessage } = useChatStore();
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    addMessage({ sender: "user", text: input });
    const userText = input.toLowerCase();
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      if (userText.includes("invoice") && userText.includes("jsw")) {
        addMessage({ 
          sender: "ai", 
          text: "I've drafted the sales invoice for JSW Steel Ltd as requested. Please review the details below:" 
        });
        
        setTimeout(() => {
          addMessage({
            sender: "ai",
            text: "",
            isWidget: true,
            widgetData: { type: "invoice_preview", amount: "₹2,000", client: "JSW Steel Ltd" }
          });
        }, 800);
      } else {
        addMessage({ sender: "ai", text: "I can help you create invoices, pull reports, or check stock. Try saying: 'Create a sales invoice for associate JSW for Rs.2000'" });
      }
    }, 600);
  }

  if (!isOpen) {
    return (
      <button 
        onClick={toggleChat}
        className="fixed bottom-6 right-6 h-14 w-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-xl flex items-center justify-center text-white hover:scale-105 transition-transform z-50"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col z-50 h-[500px] animate-in slide-in-from-bottom-5">
      <div className="h-16 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-between px-4 text-white">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6" />
          <div>
            <h3 className="font-semibold text-sm">Graphory AI</h3>
            <p className="text-xs text-blue-100 opacity-90">CRM Assistant</p>
          </div>
        </div>
        <button onClick={toggleChat} className="text-white hover:bg-white/20 p-1 rounded-md transition-colors">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex gap-2 max-w-[85%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
              <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === "user" ? "bg-blue-100 text-blue-700" : "bg-indigo-100 text-indigo-700"}`}>
                {msg.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
              </div>
              
              {msg.isWidget ? (
                <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm text-sm w-full">
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold mb-2">
                    <CheckCircle2 className="h-4 w-4" /> Draft Invoice Created
                  </div>
                  <div className="space-y-1 text-slate-600">
                    <p><span className="font-medium">Client:</span> {msg.widgetData.client}</p>
                    <p><span className="font-medium">Amount:</span> {msg.widgetData.amount}</p>
                    <p><span className="font-medium">Status:</span> Draft</p>
                  </div>
                  <Button size="sm" className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white">Approve & Save</Button>
                </div>
              ) : (
                <div className={`rounded-lg px-3 py-2 text-sm shadow-sm ${msg.sender === "user" ? "bg-blue-600 text-white" : "bg-white border border-slate-200 text-slate-700"}`}>
                  {msg.text}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 bg-white border-t border-slate-200 flex gap-2">
        <Input 
          placeholder="Ask AI to do something..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 focus-visible:ring-1"
        />
        <Button onClick={handleSend} size="icon" className="bg-blue-600 hover:bg-blue-700 text-white shrink-0">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
