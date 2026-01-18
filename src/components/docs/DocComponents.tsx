import React from 'react';

export const Callout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
    <h4 className="text-blue-400 font-semibold mb-2">{title}</h4>
    <div className="text-gray-300 m-0">{children}</div>
  </div>
);

export const CardGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
    {children}
  </div>
);

export const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
    <h4 className="font-bold text-brand-400 mb-2">{title}</h4>
    <div className="text-sm">{children}</div>
  </div>
);

export const Endpoint: React.FC<{ method: string; path: string; title: string }> = ({ method, path, title }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <code className="bg-black/50 px-2 py-1 rounded text-brand-400 font-mono">
      <span className="font-bold mr-2">{method}</span>
      {path}
    </code>
  </div>
);
