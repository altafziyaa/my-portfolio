export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm mb-2">
            Introduction
          </p>
          <h2 className="text-4xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I’m a{" "}
              <span className="text-primary font-semibold">
                Full Stack Developer
              </span>{" "}
              who loves building clean, scalable, and user-focused web
              applications.
            </p>

            <p className="text-muted leading-relaxed">
              I work with modern technologies like React, Tailwind CSS, Node.js,
              and REST APIs, focusing on clean code and best practices.
            </p>

            <p className="text-muted leading-relaxed">
              My goal is to create real-world products that solve problems and
              deliver meaningful experiences.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "1+ Year", desc: "Experience" },
              { title: "2", desc: "Projects" },
              { title: "Clean Code", desc: "Best Practice" },
              { title: "Growth", desc: "Mindset" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card/80 backdrop-blur border border-white/10
                           rounded-xl p-6 text-center
                           hover:border-primary hover:-translate-y-1
                           transition"
              >
                <h3 className="text-2xl font-bold text-primary">
                  {item.title}
                </h3>
                <p className="text-muted mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
