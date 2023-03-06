import { categories } from "../../../../constants/navbar";
import { NavLink } from "../../../../features/nav-link/nav-link";

export const HeaderNavBar: React.FC = (): JSX.Element => {
  return (
    <nav>
      <ul className="flex items-center gap-10">
        {categories.map((category) => (
          <li key={category}>
            <NavLink category={category} isActive={true} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
