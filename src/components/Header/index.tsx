import { BackButton, BackIcon, HeaderContainer, Logo } from "./styles";

import LogoImg from "@assets/logo.png";

interface HeaderProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <HeaderContainer>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={LogoImg} />
    </HeaderContainer>
  );
}
