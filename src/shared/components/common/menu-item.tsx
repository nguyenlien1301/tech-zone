import ActiveLink from "./active-link";

interface MenuItemProps {
  url: string;
  title: string;
  icon: React.ReactNode;
  onlyIcon?: boolean;
}
function MenuItem({ icon, onlyIcon, title = "", url = "/" }: MenuItemProps) {
  return (
    <li className="relative block">
      <ActiveLink url={url}>
        {/* <span className="shrink-0">{icon}</span> */}
        {title}
        {/* {onlyIcon ? null : title} */}
      </ActiveLink>
    </li>
  );
}
export default MenuItem;
