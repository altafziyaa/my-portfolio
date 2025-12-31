export default function GoogleForm() {
  return (
    <section
      id="contact-form"
      className="py-16 bg-gradient-to-b from-background to-background/90"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Card */}
        <div className="bg-card border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Send Me a <span className="text-primary">Message</span>
          </h2>

          <p className="text-muted mb-6">
            Have a project or opportunity in mind? I’d love to hear from you.
          </p>

          <a
            href="https://docs.google.com/forms/d/1u-KAyT5xzmp5zl2ziogtAN9uaCkWP1Zs0FFQY9Y3AGI/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              px-7 py-3
              rounded-xl
              bg-primary/90
              text-white font-medium
              hover:bg-primary
              transition
            "
          >
            Open Contact Form →
          </a>
        </div>
      </div>
    </section>
  );
}
