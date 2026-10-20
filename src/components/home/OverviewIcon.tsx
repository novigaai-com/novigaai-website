const icons = {
    cases: <><rect x="5" y="5" width="14" height="16" rx="2" /><path d="M9 5V3h6v2M9 10h6M9 14h6M9 18h3" /></>,
    signal: <><path d="M3 12h4l3-7 4 14 3-7h4" /><path d="M4 4h2m12 16h2" /></>,
    literature: <><path d="M12 6v15M3 4c4-1 6 0 9 2 3-2 5-3 9-2v15c-4-1-6 0-9 2-3-2-5-3-9-2z" /><path d="m6 8 3 1m6 0 3-1" /></>,
    social: <><path d="M20 11a8 8 0 0 1-8 8H7l-4 3V11a8 8 0 1 1 17 0Z" /><path d="M7 11h.01M12 11h.01M17 11h.01" /></>,
    reporting: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6M8 13h8M8 17h5" /></>,
    ai: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5zM20 3v4m-2-2h4" /></>,
    shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6z" /><path d="m8 12 3 3 5-6" /></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></>,
    review: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-3a6 6 0 0 1 10-4m2 4 2 2 4-5" /></>,
    accessibility: <><circle cx="12" cy="4" r="2" /><path d="m4 9 8 2 8-2M12 11v5m0 0-4 6m4-6 4 6" /></>,
    building: <><path d="M4 21V5l8-2v18M12 9h8v12M2 21h20M7 8h2m-2 4h2m-2 4h2m6-3h2m-2 4h2" /></>,
    teams: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m3 11v-3a6 6 0 0 0-2-4" /></>,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    chevron: <path d="m6 9 6 6 6-6" />,
} as const;

export type OverviewIconName = keyof typeof icons;

export default function OverviewIcon({ name, className }: { name: OverviewIconName; className?: string }) {
    return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>;
}
