import React, { useState } from 'react';
import { generateBusinessCaptions } from '../services/geminiService';
import { GeneratedCaption } from '../types';
import { Sparkles, Copy, Check, Loader2 } from 'lucide-react';

const AICaptionGenerator: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [mood, setMood] = useState('Excited');
  const [captions, setCaptions] = useState<GeneratedCaption[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!process.env.API_KEY) {
      setError("API Key is missing in environment variables.");
      return;
    }
    setLoading(true);
    setError('');
    setCaptions([]);

    try {
      const results = await generateBusinessCaptions(businessName, businessType, mood);
      setCaptions(results);
    } catch (err) {
      setError('Failed to generate captions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="ai-tool" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-500 to-yellow-500 px-4 py-1 rounded-full mb-4">
            <Sparkles size={14} className="text-white" />
            <span className="text-white text-xs font-bold uppercase tracking-wider">Powered by Gemini AI</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Free Caption Generator</h2>
          <p className="text-gray-400">Owner of a local business? Generate catchy Instagram captions instantly.</p>
        </div>

        <div className="bg-dark-card border border-dark-border rounded-3xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleGenerate} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Business Name</label>
              <input
                type="text"
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="e.g. Patil Tea House"
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Business Type</label>
              <input
                type="text"
                required
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                placeholder="e.g. Cafe, Clothing Store"
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Mood</label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors appearance-none"
              >
                <option value="Excited">Excited 🔥</option>
                <option value="Professional">Professional 👔</option>
                <option value="Funny">Funny 😂</option>
                <option value="Relaxed">Relaxed ☕</option>
              </select>
            </div>
            <div className="md:col-span-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-600/25 flex items-center justify-center space-x-2"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
                <span>{loading ? 'Thinking...' : 'Generate Magic Captions'}</span>
              </button>
              {error && <p className="text-red-500 mt-4 text-center text-sm">{error}</p>}
            </div>
          </form>

          {/* Results */}
          <div className="grid grid-cols-1 gap-4">
            {captions.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group relative">
                <button
                  onClick={() => copyToClipboard(`${item.caption} ${item.hashtags.join(' ')}`, idx)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-brand-500 rounded-lg text-white transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedIndex === idx ? <Check size={16} /> : <Copy size={16} />}
                </button>
                <p className="text-white text-lg mb-3 font-medium">"{item.caption}"</p>
                <div className="flex flex-wrap gap-2">
                  {item.hashtags.map((tag, i) => (
                    <span key={i} className="text-brand-400 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICaptionGenerator;
