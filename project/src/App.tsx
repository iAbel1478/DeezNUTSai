import React, { useState } from 'react';
import { Bot, RefreshCw, Sparkles } from 'lucide-react';

function App() {
  const [joke, setJoke] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateJoke = () => {
    setLoading(true);
    // Simulate AI generation with a small delay
    setTimeout(() => {
      const setups = [
        "Orange",
        "Lettuce",
        "Banana",
        "Interrupting cow",
        "Tank",
        "Boo",
        "Spell",
        "Dishes",
      ];
      
      const setup = setups[Math.floor(Math.random() * setups.length)];
      const joke = [
        "Knock knock!",
        "Who's there?",
        setup,
        `${setup} who?`,
        `${setup} deez nuts! Got 'em! 🥜`
      ];
      
      setJoke(joke);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex flex-col items-center p-8">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Bot className="w-12 h-12 text-white" />
            <h1 className="text-4xl font-bold text-white">DeezNuts.AI</h1>
          </div>
          <p className="text-purple-200 text-lg">
            The world's most advanced AI-powered Deez Nuts joke generator
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex justify-center mb-6">
            <button
              onClick={generateJoke}
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-all disabled:opacity-50"
            >
              {loading ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                <Sparkles className="w-5 h-5" />
              )}
              Generate Joke
            </button>
          </div>

          {joke.length > 0 && (
            <div className="space-y-4">
              {joke.map((line, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    index % 2 === 0
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {line}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center text-purple-200 text-sm">
          <p>Powered by cutting-edge nut-based machine learning algorithms</p>
          <p className="mt-2">Warning: May contain traces of deez nuts 🥜</p>
        </footer>
      </div>
    </div>
  );
}

export default App;