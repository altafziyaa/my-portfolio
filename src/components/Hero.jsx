export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex items-center
        bg-gradient-to-b
        from-white/10
        via-background
        to-background
      "
    >
      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">
        {/* Soft glow */}
        <div className="absolute inset-0 -z-10 blur-3xl bg-white/10 rounded-full"></div>

        {/* Role */}
        <p className="text-primary uppercase tracking-widest text-sm">
          Full Stack Developer
        </p>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I’m <span className="text-primary">Md. Altaf</span>
        </h1>

        {/* Description */}
        <p className="text-muted text-lg max-w-2xl mx-auto">
          I build clean, scalable, and modern web applications with a focus on
          performance and user experience.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 pt-6">
          <a
            href="/resume.pdf"
            download
            className="
    inline-flex items-center gap-2
    px-7 py-3 rounded-xl font-medium
    border border-primary text-primary
    hover:bg-primary hover:text-white
    transition
  "
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-primary rounded-lg hover:bg-primary/10 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
