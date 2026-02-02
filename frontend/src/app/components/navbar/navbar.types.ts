export interface NavbarProps {
  activeSection: string;
}

export interface MenuProps {
  activeSectionStyle: {
    home: React.CSSProperties;
    skills: React.CSSProperties;
    experience: React.CSSProperties;
    projects: React.CSSProperties;
  };
}

export interface LinkProps {
  href: string;
  className: string;
  style: React.CSSProperties;
}

export interface IconProps {
  className: string;
}
