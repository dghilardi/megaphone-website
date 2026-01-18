import { useState } from "react";
import {
  Menu,
  X,
  Book,
  Terminal,
  Server,
  Layers,
  Zap,
  Globe,
  Box,
  FileCode,
  RefreshCw,
} from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MDXProvider } from "@mdx-js/react";
import { Callout, Card, CardGrid, Endpoint } from "../components/docs/DocComponents";

import Introduction from "../docs/Introduction.mdx";
import Installation from "../docs/Installation.mdx";
import QuickStart from "../docs/QuickStart.mdx";
import Architecture from "../docs/Architecture.mdx";
import Channels from "../docs/Channels.mdx";
import Integration from "../docs/Integration.mdx";
import ApiEndpoints from "../docs/ApiEndpoints.mdx";
import SdkRust from "../docs/SdkRust.mdx";
import SdkJs from "../docs/SdkJs.mdx";

const docsSections = [
  {
    title: "Getting Started",
    items: [
      { id: "introduction", title: "Introduction", icon: Book, component: Introduction },
      { id: "installation", title: "Installation", icon: Terminal, component: Installation },
      { id: "quickstart", title: "Quick Start", icon: Zap, component: QuickStart },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { id: "architecture", title: "Architecture", icon: Layers, component: Architecture },
      { id: "channels", title: "Channels", icon: Server, component: Channels },
      { id: "integration", title: "Integration Pattern", icon: RefreshCw, component: Integration },
    ],
  },
  {
    title: "API Reference",
    items: [{ id: "api-endpoints", title: "HTTP Endpoints", icon: Globe, component: ApiEndpoints }],
  },
  {
    title: "Client SDKs",
    items: [
      { id: "sdk-rust", title: "Rust Client", icon: Box, component: SdkRust },
      { id: "sdk-js", title: "JavaScript Client", icon: FileCode, component: SdkJs },
    ],
  },
];

const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold text-white mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold text-white mb-6" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-semibold text-white mb-4" {...props} />,
  p: (props: any) => <p className="leading-relaxed mb-4 last:mb-0" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-300" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 space-y-4 mb-6 text-gray-300" {...props} />,
  table: (props: any) => (
    <div className="overflow-x-auto border border-white/10 rounded-lg mb-8">
      <table className="w-full text-left text-sm text-gray-300 divide-y divide-white/10" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-white/5 uppercase font-semibold text-gray-200" {...props} />,
  th: (props: any) => <th className="px-6 py-3" {...props} />,
  td: (props: any) => <td className="px-6 py-4" {...props} />,
  strong: (props: any) => {
    if (props.children === "Yes") {
      return <span className="text-green-400 font-bold" {...props} />;
    }
    return <strong className="font-bold text-white" {...props} />;
  },
  pre: ({ children }: any) => (
    <pre className="bg-black/50 rounded-lg overflow-hidden mb-8 last:mb-0">
      {children}
    </pre>
  ),
  code: ({ className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <SyntaxHighlighter
        {...props}
        children={String(children).replace(/\n$/, "")}
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent' }}
      />
    ) : (
      <code className="bg-white/10 px-1.5 py-0.5 rounded text-brand-400 font-mono text-[0.9em]" {...props}>
        {children}
      </code>
    );
  },
  Callout,
  Card,
  CardGrid,
  Endpoint,
};

export default function Docs() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen pt-16 bg-dark-bg text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 py-8">
          {/* Mobile Sidebar Toggle */}
          <button
            className="lg:hidden flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-lg"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            <span>Table of Contents</span>
          </button>

          {/* Sidebar */}
          <aside
            className={`
            fixed inset-0 z-40 bg-dark-bg/95 backdrop-blur-xl lg:static lg:bg-transparent lg:w-64 lg:block overflow-y-auto transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
          >
            <div className="p-4 lg:p-0 space-y-8">
              {docsSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 px-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                            activeSection === item.id
                              ? "bg-brand-500/20 text-brand-400"
                              : "hover:bg-white/5 text-gray-400 hover:text-white"
                          }`}
                        >
                          <item.icon size={16} />
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0 prose prose-invert max-w-none">
            <div className="bg-dark-card border border-white/10 rounded-2xl p-8 lg:p-12">
                <MDXProvider components={components}>
                    {docsSections.flatMap(section => section.items).map(item => {
                        const Content = item.component;
                        return (
                            <div key={item.id} id={item.id} className="mb-16 scroll-mt-24">
                                <Content />
                            </div>
                        )
                    })}
                </MDXProvider>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
