import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Download, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const ResumeContext = createContext<{ open: () => void }>({ open: () => {} });

export const useResume = () => useContext(ResumeContext);

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <ResumeContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 p-3 backdrop-blur-sm sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg"
            >
              <div className="flex items-center justify-between gap-3 border-b border-glass-border px-4 py-3">
                <p className="mono-label text-primary">Resume — {profile.name}</p>
                <div className="flex items-center gap-2">
                  <a
                    href={profile.resumeUrl}
                    download
                    className="mono-label inline-flex items-center gap-2 rounded-sm border border-primary/50 bg-primary/10 px-3 py-1.5 text-primary transition-colors hover:bg-primary/20"
                  >
                    <Download className="h-3.5 w-3.5" aria-hidden="true" />
                    Download
                  </a>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close resume"
                    className="grid h-8 w-8 place-items-center rounded-sm border border-glass-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <iframe
                src={profile.resumeUrl}
                title="Resume of Shaik Zakeer"
                className="h-full w-full flex-1 bg-paper"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </ResumeContext.Provider>
  );
}
