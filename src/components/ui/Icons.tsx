type IconProps = { name: string; size?: number };

const paths: Record<string, React.ReactNode> = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  phone: <path d="M7 3h4l2 5-3 2c1.2 2.5 2.7 4 5 5l2-3 5 2v4c0 1.7-1.3 3-3 3C10.2 21 3 13.8 3 5c0-1.1.9-2 2-2h2Z" />,
  message: <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5A8.5 8.5 0 1 1 21 11.5Z" />,
  pin: <><path d="M12 22s7-6 7-13a7 7 0 1 0-14 0c0 7 7 13 7 13Z" /><circle cx="12" cy="9" r="2.3" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  shop: <><path d="M4 10h16l-2-6H6l-2 6Z" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3M3 12h18" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c.7-5 3.4-7 8-7s7.3 2 8 7" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" /></>,
  check: <path d="m5 12 4 4L19 6" />,
};

export function Icon({ name, size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.arrow}
    </svg>
  );
}
