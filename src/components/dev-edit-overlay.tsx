"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { getEditablePage } from "@/lib/editable-pages";

const highlightAttribute = "data-edit-highlighted";

export function DevEditOverlay() {
  const pathname = usePathname() ?? "/";
  const page = getEditablePage(pathname);
  const [open, setOpen] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  function clearHighlight() {
    document.querySelectorAll(`[${highlightAttribute}='true']`).forEach((element) => {
      element.removeAttribute(highlightAttribute);
    });
  }

  function focusTarget(targetId: string) {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    clearHighlight();
    target.setAttribute(highlightAttribute, "true");
    target.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      target.removeAttribute(highlightAttribute);
      timeoutRef.current = null;
    }, 2200);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      document.querySelectorAll(`[${highlightAttribute}='true']`).forEach((element) => {
        element.removeAttribute(highlightAttribute);
      });
    };
  }, []);

  if (process.env.NODE_ENV !== "development" || !page) {
    return null;
  }

  return (
    <aside className="pointer-events-none fixed right-6 top-24 z-[70] hidden max-h-[calc(100vh-7rem)] w-[22rem] lg:flex">
      <div className="pointer-events-auto flex w-full flex-col overflow-hidden rounded-[1.5rem] border border-sky-200/70 bg-white/96 shadow-[0_24px_80px_rgba(12,18,34,0.16)] backdrop-blur-xl">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200/80 px-4 py-4">
          <div className="space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">Dev Edit</p>
            <p className="text-sm font-semibold text-slate-950">{page.label}</p>
            <p className="text-xs text-slate-500">{page.path}</p>
            <p className="font-mono text-[11px] leading-5 text-slate-500">{page.sourceKey}</p>
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
          >
            {open ? "Hide" : "Show"}
          </button>
        </div>

        {open ? (
          <div className="space-y-4 overflow-y-auto px-4 py-4">
            {page.sections.map((section) => (
              <div key={section.id} className="space-y-2">
                <button
                  type="button"
                  onClick={() => focusTarget(section.targetId)}
                  className="w-full rounded-[1rem] border border-slate-200 bg-slate-50/80 px-3 py-3 text-left transition hover:border-sky-300 hover:bg-sky-50"
                >
                  <p className="text-sm font-semibold text-slate-950">{section.label}</p>
                  <p className="mt-1 font-mono text-[11px] leading-5 text-slate-500">{section.sourceKey}</p>
                </button>

                {section.children?.length ? (
                  <div className="space-y-2 pl-3">
                    {section.children.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => focusTarget(item.targetId)}
                        className="w-full rounded-[0.95rem] border border-slate-200/80 bg-white px-3 py-2.5 text-left transition hover:border-sky-300 hover:bg-sky-50"
                      >
                        <p className="text-xs font-medium text-slate-900">{item.label}</p>
                        <p className="mt-1 font-mono text-[10px] leading-5 text-slate-500">{item.sourceKey}</p>
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          <div className="px-4 py-3 text-xs leading-6 text-slate-500">Sections and items are hidden. Expand to jump and highlight editable regions.</div>
        )}
      </div>
    </aside>
  );
}
