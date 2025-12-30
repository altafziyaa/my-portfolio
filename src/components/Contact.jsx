import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative py-20 bg-background border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Top content */}
        <div className="grid gap-12 md:grid-cols-3 mb-16">
          {/* About / Name */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4 italic">
              Md. Altaf
            </h3>
            <p className="text-muted leading-relaxed">
              Full Stack Developer building clean, scalable, and modern web
              applications. Open to freelance, remote jobs, and collaborations.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-muted">
              <li>
                <FaEnvelope className="inline mr-2" />
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-primary"
                >
                  altafziyaa91@gmail.com
                </a>
              </li>
              <li>
                <FaPhoneAlt className="inline mr-2" />
                <a href="tel:+918271612838" className="hover:text-primary">
                  +91 82716 12838
                </a>
              </li>
              <li>
                <FaLocationDot className="inline mr-2" />
                <span className="hover:text-primary">Dehli, India</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Social</h4>
            <ul className="space-y-3 text-muted">
              <li>
                <FaGithub className="inline mr-2" />
                <a
                  href="https://github.com/altafziyaa"
                  target="_blank"
                  className="hover:text-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <FaLinkedin className="inline mr-2" />
                <a
                  href="https://www.linkedin.com/in/md-altaf1/"
                  target="_blank"
                  className="hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <FaXTwitter className="inline mr-2" />
                <a
                  href="https://x.com/altafziyaa39"
                  target="_blank"
                  className="hover:text-primary"
                >
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-muted gap-4">
          <p>© {new Date().getFullYear()} Md. Altaf. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#home" className="hover:text-primary">
              Home
            </a>
            <a href="#projects" className="hover:text-primary">
              Projects
            </a>
            <a href="#skills" className="hover:text-primary">
              Skills
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
