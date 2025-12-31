export default function VSCodeMock() {
  return (
    <div
      className="
        w-full max-w-6xl mx-auto
        min-h-[65vh]
        rounded-2xl overflow-hidden
        border border-white/10
        bg-[#1e1e1e]
        font-mono text-sm
        shadow-2xl
        flex flex-col
      "
    >
      {/* Top Bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#2c2c2c] border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-4 text-xs text-white/60">VS Code</span>
      </div>

      {/* Tabs */}
      <div className="flex bg-[#252526] text-xs border-b border-white/10">
        <div className="px-4 py-2 bg-[#1e1e1e] text-white border-r border-white/10">
          Hero.jsx
        </div>
        <div className="px-4 py-2 text-white/50">App.jsx</div>
      </div>

      {/* Main Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-14 bg-[#252526] flex flex-col items-center py-4 gap-4 text-white/50">
          <span>📁</span>
          <span>🔍</span>
          <span>🌿</span>
          <span>⚙️</span>
        </div>

        {/* Code Area */}
        <pre className="flex-1 p-5 text-md leading-6 overflow-auto">
          <code>
            <span className="text-purple-400">export default function</span>{" "}
            <span className="text-yellow-300">Hero</span>() {"{"}
            {"\n"}
            {"  "}
            <span className="text-purple-400">return</span> ({"\n"}
            {"    "}
            <span className="text-red-400">&lt;section</span>{" "}
            <span className="text-green-400">className</span>=
            <span className="text-orange-300">
              "min-h-screen flex items-center"
            </span>
            <span className="text-red-400">&gt;</span>
            {"\n"}
            {"      "}
            <span className="text-red-400">&lt;h1</span>{" "}
            <span className="text-green-400">className</span>=
            <span className="text-orange-300">
              "text-4xl font-bold text-primary"
            </span>
            <span className="text-red-400">&gt;</span>
            Hi, I'm <span className="text-blue-400">Altaf</span>
            <span className="text-red-400">&lt;/h1&gt;</span>
            {"\n"}
            {"    "}
            <span className="text-red-400">&lt;/section&gt;</span>
            {"\n"}
            {"  "}
            );
            {"\n"}
            {"}"}
          </code>
          {"\n"}
          {"  "}
          <code>
            <span className="text-purple-400">export default function</span>{" "}
            <span className="text-yellow-300">Altaf</span>() {"{"}
            {"\n"}
            {"  "}
            <span className="text-purple-400">return</span> ({"\n"}
            {"    "}
            <span className="text-red-400">&lt;section</span>{" "}
            <span className="text-green-400">className</span>=
            <span className="text-orange-300">
              "min-h-screen flex items-center"
            </span>
            <span className="text-red-400">&gt;</span>
            {"\n"}
            {"      "}
            <span className="text-red-400">&lt;h1</span>{" "}
            <span className="text-green-400">className</span>=
            <span className="text-orange-300">
              "text-4xl font-bold text-primary"
            </span>
            <span className="text-red-400">&gt;</span>
            Hi, I'm <span className="text-blue-400">Altaf</span>
            <span className="text-red-400">&lt;/h1&gt;</span>
            {"\n"}
            {"    "}
            <span className="text-red-400">&lt;/section&gt;</span>
            {"\n"}
            {"  "}
            );
            {"\n"}
            {"}"}
          </code>
        </pre>
      </div>

      {/* Status Bar */}
      <div className="flex justify-between px-4 py-1 bg-[#007acc] text-xs text-white">
        <span>Ln 12, Col 5</span>
        <span>UTF-8 · JavaScript · Prettier</span>
      </div>
    </div>
  );
}
