const skills = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "React",
      "Redux",
      "Next Js",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Java", "SpringBoot", "REST API", "JWT"],
  },
  {
    title: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                relative
                p-6
                rounded-2xl
                bg-gradient-to-br
                from-primary/20
                via-card
                to-purple-500/20
                border border-white/10
                hover:border-primary
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* Glow layer */}
              <div className="absolute inset-0 -z-10 rounded-2xl blur-xl bg-primary/20"></div>

              <h3 className="text-xl font-semibold mb-4 text-primary">
                {skill.title}
              </h3>

              <ul className="space-y-2 text-muted">
                {skill.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
