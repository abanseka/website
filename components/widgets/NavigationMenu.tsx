import { MenuContainer } from "@styledComponents/global";
import { FlexContainer } from "@styledComponents/flex";
import { NavLink } from "@styledComponents/links";
import JournalIcon from "@assets/journal.svg";
import WorkIcon from "@assets/work.svg";
import GitHub from "@assets/rocket.svg";
import Person from "@assets/person.svg";
import { NormalText } from "@styledComponents/typography";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { themeType } from "types/common";
import { font } from "theme";

type navLink = {
  id: number;
  label: string;
  href: string;
  icon?: React.ReactNode;
};

type MenuWidgetProps = {
  ma?: string;
  className?: string;
  renderIcon?: boolean;
};

const NavigationMenu = ({
  ma,
  className,
  renderIcon = true,
}: MenuWidgetProps) => {
  const theme: themeType = useContext(ThemeContext);
  const { highlight } = theme.colors;
  const { bold } = font.fontWeight;

  // prettier-ignore
  const navLinks: navLink[] = [
    { id: 1, label: "Notes", href: "/", icon: <JournalIcon /> },
    { id: 2, label: "Works", href: "/works", icon: <WorkIcon /> },
  ];

  const socialLinks: navLink[] = [
    {
      id: 3,
      label: "GitHub",
      href: "https://github.com/abanseka",
      icon: <GitHub />,
    },
    {
      id: 4,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abanseka-sylvester/",
      icon: <Person />,
    },
  ];

  return (
    <MenuContainer>
      <FlexContainer gp={1.2} ma={ma} pd="0.625rem" className={className}>
        {navLinks.map((link: navLink) => (
          <NavLink href={link.href} key={link.id}>
            {renderIcon && link.icon}
            {link.label}
          </NavLink>
        ))}

        <NormalText color={highlight} fw={bold}>
          |
        </NormalText>

        {socialLinks.map((link: navLink) => (
          <NavLink href={link.href} key={link.id}>
            {renderIcon && link.icon}
            {link.label}
          </NavLink>
        ))}
      </FlexContainer>
    </MenuContainer>
  );
};

export default NavigationMenu;
