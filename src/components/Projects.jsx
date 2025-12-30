export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-background to-background/90"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Projects</span>
        </h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <div
            className="bg-card border border-white/10 rounded-2xl p-6
                          hover:border-primary hover:-translate-y-1
                          transition-all duration-300 flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-2">
              Learning Management System
            </h3>

            <p className="text-muted mb-4">
              Role-based LMS with authentication, course management, and clean
              REST APIs.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="tech">Html</span>
              <span className="tech">Bootstrap5</span>
              <span className="tech">Css</span>
              <span className="tech">Laravel</span>
            </div>

            <div className="mt-auto flex gap-3">
              <a
                href="https://edutestseries.com/"
                target="_blank"
                className="px-4 py-2 bg-primary rounded-lg hover:opacity-90 transition"
              >
                Live
              </a>
              <a
                href="https://github.com/altafziyaa/reactWithLaravel"
                target="_blank"
                className="px-4 py-2 border border-primary rounded-lg hover:bg-primary/10 transition"
              >
                Code
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div
            className="bg-card border border-white/10 rounded-2xl p-6
                          hover:border-primary hover:-translate-y-1
                          transition-all duration-300 flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-2">E-Commerce</h3>

            <p className="text-muted mb-4">
              Role-based LMS with authentication, course management, and clean
              REST APIs. Complete e-commerce platform with product catalog,
              shopping cart, payment integration, and order management system.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="tech">React</span>
              <span className="tech">TypeScript</span>
              <span className="tech">Tailwind</span>
              <span className="tech">Node.js</span>
              <span className="tech">MongoDB</span>
            </div>

            <div className="mt-auto flex gap-3">
              <a
                href="#"
                target="_blank"
                className="px-4 py-2 bg-primary rounded-lg hover:opacity-90 transition"
              >
                Working on
              </a>
              <a
                href="https://github.com/altafziyaa/newBazaar/tree/master/Music/OneDrive/Desktop/newBazaar/server "
                target="_blank"
                className="px-4 py-2 border border-primary rounded-lg hover:bg-primary/10 transition"
              >
                Code
              </a>
            </div>
          </div>

          {/* Project 1 */}
          {/* <div
            className="bg-card border border-white/10 rounded-2xl p-6
                          hover:border-primary hover:-translate-y-1
                          transition-all duration-300 flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-2">
              Learning Management System
            </h3>

            <p className="text-muted mb-4">
              Role-based LMS with authentication, course management, and clean
              REST APIs.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="tech">React</span>
              <span className="tech">Tailwind</span>
              <span className="tech">Node.js</span>
              <span className="tech">MongoDB</span>
            </div>

            <div className="mt-auto flex gap-3">
              <a
                href="https://edutestseries.com/"
                target="_blank"
                className="px-4 py-2 bg-primary rounded-lg hover:opacity-90 transition"
              >
                Live
              </a>
              <a
                href="#"
                target="_blank"
                className="px-4 py-2 border border-primary rounded-lg hover:bg-primary/10 transition"
              >
                Code
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
