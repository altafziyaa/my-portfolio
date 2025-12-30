export default function VSCodeMock() {
  return (
    <div
      className="
        w-full max-w-5xl mx-auto
        rounded-2xl overflow-hidden
        border border-white/10
        bg-card
        font-mono text-sm
        shadow-2xl
      "
    >
      {/* Top Bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-background border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="ml-4 text-xs text-muted">VS Code</span>
      </div>

      {/* Code */}
      <pre className="p-4 text-sm leading-6 overflow-auto font-mono">
        <code>
          <span className="text-purple-400">export default function</span>{" "}
          <span className="text-yellow-300">Hero</span>
          <span className="text-text">()</span>{" "}
          <span className="text-text">{"{"}</span>
          {"\n"}
          {"  "}
          <span className="text-purple-400">return</span>{" "}
          <span className="text-text">(</span>
          {"\n"}
          {"    "}
          <span className="text-text">{"<"}</span>
          <span className="text-red-400">section</span>{" "}
          <span className="text-green-400">className</span>
          <span className="text-text">=</span>
          <span className="text-orange-300">
            "min-h-screen flex items-center"
          </span>
          <span className="text-text">{" >"}</span>
          {"\n"}
          {"      "}
          <span className="text-text">{"<"}</span>
          <span className="text-red-400">h1</span>{" "}
          <span className="text-green-400">className</span>
          <span className="text-text">=</span>
          <span className="text-orange-300">
            "text-4xl font-bold text-primary"
          </span>
          <span className="text-text">{" >"}</span>
          {"\n"}
          {"        "}
          <span className="text-text">Hi, I'm </span>
          <span className="text-blue-400">Altaf</span>
          {"\n"}
          {"      "}
          <span className="text-text">{"</"}</span>
          <span className="text-red-400">h1</span>
          <span className="text-text">{">"}</span>
          {"\n"}
          {"    "}
          <span className="text-text">{"</"}</span>
          <span className="text-red-400">section</span>
          <span className="text-text">{">"}</span>
          {"\n"}
          {"  "}
          <span className="text-text">)</span>
          {"\n"}
          <span className="text-text">{"}"}</span>
        </code>
      </pre>
    </div>
  );
}
