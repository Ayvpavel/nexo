import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  width: 240px;
  background: ${({ theme }) => theme.colors.sidebarBg};
  color: ${({ theme }) => theme.colors.sidebarText};
  display: flex;
  flex-direction: column;
  padding: 20px 12px;
  flex-shrink: 0;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 8px 28px;
  line-height: 1;
`

export const LogoIcon = styled.div`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  overflow: hidden;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const LogoText = styled.span`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1;
  color: ${({ theme }) => theme.colors.white};
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`

export const NavItem = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primaryLight : 'none'};
  border: none;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.sidebarText};
  font-weight: ${({ $active }) => ($active ? 500 : 400)};
  text-align: left;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? theme.colors.primaryLight : '#2a2a2a'};
  }
`

export const NavIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: inherit;
  & > svg {
    font-size: 20px;
  }
`

export const Profile = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 16px 8px 4px;
  margin-top: auto;
  border-top: 1px solid #333;
`

export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
`

export const ProfileInfo = styled.div`
  flex: 1;
  min-width: 0;
`

export const Name = styled.div`
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
`

export const Role = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.sidebarTextMuted};
`

export const Chevron = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.sidebarTextMuted};
`
