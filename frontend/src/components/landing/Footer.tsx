import Link from "next/link";

import Container from "@/components/layout/Container";

const footerSections = [
  {
    title: "Workspace",
    links: [
      { label: "Sparks", href: "/features#sparks" },
      { label: "Projects", href: "/features#projects" },
      { label: "Knowledge", href: "/features#knowledge" },
      { label: "Drafts", href: "/features#drafts" },
    ],
  },
  {
    title: "Build",
    links: [
      { label: "Roadmap", href: "/roadmap" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Help Center", href: "/help" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pb-12">
      <Container>
        <div className="border-t border-border/60 pt-16">
          <div className="grid gap-14 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                ThoughtForge
              </h3>

              <p className="mt-4 max-w-sm leading-7 text-muted-foreground">
                Forge ideas into lasting knowledge, structured writing, and
                meaningful work.
              </p>
            </div>

            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                  {section.title}
                </h4>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <span>© {new Date().getFullYear()} ThoughtForge</span>

            <span>Built for thinkers, writers and creators.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}