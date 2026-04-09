"use client";
import { Terminal } from "@/components/ui/terminal";

export function TerminalDemo() {
  return (
    <section
      className="w-full py-10 md:py-20"
      aria-label="Demonstração do terminal de desenvolvimento"
    >
      <Terminal
        commands={[
          "npx shadcn@latest init",
          "npm install motion framer-motion",
          "npx shadcn@latest add button card",
          "npm run dev",
        ]}
        outputs={{
          0: [
            "✔ Preflight checks passed.",
            "✔ Created components.json",
            "✔ Initialized project.",
          ],
          1: ["added 2 packages in 3s"],
          2: ["✔ Done. Installed button, card."],
          3: [
            "▲ Next.js 15.5 ready",
            "✓ Local: http://localhost:3000",
            "✓ Network: http://192.168.0.10:3000",
          ],
        }}
        typingSpeed={45}
        delayBetweenCommands={1000}
      />
    </section>
  );
}