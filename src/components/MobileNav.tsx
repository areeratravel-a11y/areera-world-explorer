import { Link } from "@tanstack/react-router";
import { Globe2, Home, LayoutGrid, PhoneCall } from "lucide-react";

const items = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/services", label: "Services", Icon: LayoutGrid },
  { to: "/countries", label: "Countries", Icon: Globe2 },
  { to: "/contact", label: "Contact", Icon: PhoneCall },
] as const;

export function MobileNav() {
  return (
    <nav
      aria-label="Primary mobile navigation"
      className="glass fixed inset-x-0 bottom-0 z-50 border-t border-border pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-4">
        {items.map(({ to, label, Icon }) => (
          <li key={to}>
            <Link
              to={to}
              activeOptions={{ exact: to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium"
            >
              <Icon className="h-5 w-5" aria-hidden />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
