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

const docsSections = [
  {
    title: "Getting Started",
    items: [
      { id: "introduction", title: "Introduction", icon: Book },
      { id: "installation", title: "Installation", icon: Terminal },
      { id: "quickstart", title: "Quick Start", icon: Zap },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { id: "architecture", title: "Architecture", icon: Layers },
      { id: "channels", title: "Channels", icon: Server },
      { id: "integration", title: "Integration Pattern", icon: RefreshCw },
    ],
  },
  {
    title: "API Reference",
    items: [{ id: "api-endpoints", title: "HTTP Endpoints", icon: Globe }],
  },
  {
    title: "Client SDKs",
    items: [
      { id: "sdk-rust", title: "Rust Client", icon: Box },
      { id: "sdk-js", title: "JavaScript Client", icon: FileCode },
    ],
  },
];

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

  const rustExample = `use megaphone::client::{MegaphoneClient, model::StreamSpec};
use futures::StreamExt;

// Initialize client
let mut client = MegaphoneClient::new("http://localhost:3080/read", 100);

// Subscribe to a stream
let mut msg_stream = client.new_unbounded_stream::<_, _, _, Payload>(
    initialize_channel
).await?;

while let Some(msg) = msg_stream.next().await {
    println!("Received: {:?}", msg);
}`;

  const jsExample = `import { MegaphonePoller } from 'megaphone-client';
import { firstValueFrom } from 'rxjs';

const poller = new MegaphonePoller('http://localhost:3000', 100);

const stream = await poller.newUnboundedStream(async channel => {
    // Logic to fetch channel details from your backend
    return {
        channelAddress: { consumer: 'uuid...', producer: '' },
        streamIds: ['new-message'],
    }
});

stream.subscribe(msg => console.log(msg));`;

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
              {/* Introduction */}
              <div id="introduction" className="mb-16 scroll-mt-24">
                <h1 className="text-4xl font-bold text-white mb-6">
                  Introduction
                </h1>
                <p className="text-xl text-gray-400 mb-6">
                  Megaphone is a high-performance reverse proxy designed to
                  simplify real-time communication between microservices and
                  frontend clients.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
                  <h4 className="text-blue-400 font-semibold mb-2">
                    Why Megaphone?
                  </h4>
                  <p className="text-gray-300 m-0">
                    It abstracts the complexity of handling long-running
                    requests and server streaming. Instead of every microservice
                    managing WebSocket connections, Megaphone handles the "last
                    mile" delivery to clients, allowing services to simply POST
                    events when they happen.
                  </p>
                </div>
              </div>

              {/* Installation */}
              <div id="installation" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-white mb-6">Installation</h2>
                <p className="mb-4">The easiest way to run Megaphone is using Docker.</p>
                <div className="bg-black/50 rounded-lg overflow-hidden mb-4">
                    <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{margin: 0, background: 'transparent'}}>
                        {"docker pull dghila/megaphone:latest"}
                    </SyntaxHighlighter>
                </div>
              </div>

              {/* Quick Start */}
              <div id="quickstart" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-white mb-6">Quick Start</h2>
                <p className="mb-4">Run the server with the required environment variables. The <code>MEGAPHONE_AGENT</code> variable is mandatory.</p>
                 <div className="bg-black/50 rounded-lg overflow-hidden mb-8">
                    <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{margin: 0, background: 'transparent'}}>
                        {"docker run -p 3000:3000 -e MEGAPHONE_AGENT=main dghila/megaphone:latest"}
                    </SyntaxHighlighter>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">Configuration</h3>
                <p className="mb-4 text-gray-400">Megaphone is configured via environment variables. Use the prefix <code>MEGAPHONE_</code>.</p>
                
                <div className="overflow-x-auto border border-white/10 rounded-lg">
                  <table className="w-full text-left text-sm text-gray-300">
                    <thead className="bg-white/5 uppercase font-semibold text-gray-200">
                      <tr>
                        <th className="px-6 py-3">Variable</th>
                        <th className="px-6 py-3">Required</th>
                        <th className="px-6 py-3">Default</th>
                        <th className="px-6 py-3">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <td className="px-6 py-4 font-mono text-brand-400">MEGAPHONE_AGENT</td>
                        <td className="px-6 py-4 text-green-400 font-bold">Yes</td>
                        <td className="px-6 py-4 text-gray-500">-</td>
                        <td className="px-6 py-4">The unique identifier for this agent/instance.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-mono text-brand-400">MEGAPHONE_ADDRESS</td>
                        <td className="px-6 py-4">No</td>
                        <td className="px-6 py-4 font-mono">0.0.0.0:3000</td>
                        <td className="px-6 py-4">The HTTP server bind address.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-mono text-brand-400">MEGAPHONE_GRPC_ADDRESS</td>
                        <td className="px-6 py-4">No</td>
                        <td className="px-6 py-4 font-mono">0.0.0.0:3001</td>
                        <td className="px-6 py-4">The gRPC server bind address (for sync).</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-mono text-brand-400">MEGAPHONE_POLL_DURATION_MILLIS</td>
                        <td className="px-6 py-4">No</td>
                        <td className="px-6 py-4 font-mono">20000</td>
                        <td className="px-6 py-4">Long-polling duration in milliseconds.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Architecture */}
              <div id="architecture" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Architecture
                </h2>
                <p>
                  Megaphone acts as a buffer and streaming bridge. The
                  architecture is built around a decoupling of{" "}
                  <strong>Producers</strong> (your backend services) and{" "}
                  <strong>Consumers</strong> (frontend clients).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h4 className="font-bold text-brand-400 mb-2">Producers</h4>
                    <p className="text-sm">
                      Write messages to a specific channel address via simple
                      HTTP POST requests. They don't need to know if a client is
                      connected.
                    </p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h4 className="font-bold text-brand-400 mb-2">Consumers</h4>
                    <p className="text-sm">
                      Connect to a channel via a long-lived HTTP GET request
                      (streaming). They receive messages in real-time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Channels */}
              <div id="channels" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-white mb-6">Channels</h2>
                <p>Channels are ephemeral communication pipes.</p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
                  <li>
                    <strong>Buffering:</strong> Each channel holds a buffer of
                    100 messages. If a client disconnects briefly, messages are
                    saved.
                  </li>
                  <li>
                    <strong>TTL:</strong> Channels automatically delete after 1
                    minute of inactivity (no reads/writes).
                  </li>
                  <li>
                    <strong>Security:</strong> Channels are identified by random
                    UUIDs, acting as capability tokens.
                  </li>
                </ul>
              </div>

              {/* Integration Pattern */}
              <div id="integration" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Integration Pattern
                </h2>
                <p>
                  A common pattern for integrating Megaphone is the "Channel
                  Handshake".
                </p>
                <ol className="list-decimal pl-6 space-y-4 mt-4 text-gray-300">
                  <li>
                    <strong>Client</strong> asks your <strong>Backend</strong>{" "}
                    for a channel (e.g., "Join Room X").
                  </li>
                  <li>
                    <strong>Backend</strong> calls Megaphone to{" "}
                    <code>/create</code> a channel (or retrieves an existing
                    one).
                  </li>
                  <li>
                    <strong>Backend</strong> returns the{" "}
                    <code>consumerAddress</code> to the Client and keeps the{" "}
                    <code>producerAddress</code> for itself.
                  </li>
                  <li>
                    <strong>Client</strong> connects to Megaphone using the{" "}
                    <code>consumerAddress</code>.
                  </li>
                  <li>
                    <strong>Backend</strong> publishes events to the{" "}
                    <code>producerAddress</code>.
                  </li>
                </ol>
              </div>

              {/* API Endpoints */}
              <div id="api-endpoints" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-white mb-6">
                  HTTP Endpoints
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Create Channel
                    </h3>
                    <code className="bg-black/50 px-2 py-1 rounded text-brand-400">
                      POST /create
                    </code>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Write Message
                    </h3>
                    <code className="bg-black/50 px-2 py-1 rounded text-brand-400">
                      POST
                      /write/&#123;producer-address&#125;/&#123;stream-id&#125;
                    </code>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Read Stream
                    </h3>
                    <code className="bg-black/50 px-2 py-1 rounded text-brand-400">
                      GET /read/&#123;consumer-address&#125;
                    </code>
                  </div>
                </div>
              </div>

              {/* Rust SDK */}
              <div id="sdk-rust" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Rust Client
                </h2>
                <p className="mb-4">
                  Use the <code>megaphone-client</code> crate to interact with
                  the server from your Rust applications.
                </p>
                <div className="bg-black/50 rounded-lg overflow-hidden">
                  <SyntaxHighlighter
                    language="rust"
                    style={vscDarkPlus}
                    customStyle={{ margin: 0, background: "transparent" }}
                  >
                    {rustExample}
                  </SyntaxHighlighter>
                </div>
              </div>

              {/* JS SDK */}
              <div id="sdk-js" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-white mb-6">
                  JavaScript Client
                </h2>
                <p className="mb-4">
                  Use the <code>megaphone-js</code> package for browser and
                  Node.js applications.
                </p>
                <div className="bg-black/50 rounded-lg overflow-hidden">
                  <SyntaxHighlighter
                    language="typescript"
                    style={vscDarkPlus}
                    customStyle={{ margin: 0, background: "transparent" }}
                  >
                    {jsExample}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
