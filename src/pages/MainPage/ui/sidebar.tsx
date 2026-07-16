import type { SvgIconComponent } from '@mui/icons-material'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import GroupsIcon from '@mui/icons-material/Groups'
import SchoolIcon from '@mui/icons-material/School'
import LayersIcon from '@mui/icons-material/Layers'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import EventIcon from '@mui/icons-material/Event'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import BarChartIcon from '@mui/icons-material/BarChart'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { NexoLogo } from '../../../shared/ui/index.ts'
import {
  APP_NAME,
  ADMIN_PLACEHOLDER,
  NAV_ITEMS,
  type NavItemId,
} from '../../../shared/config/navigation.ts'
import {
  Avatar,
  Chevron,
  Logo,
  LogoIcon,
  LogoText,
  Name,
  Nav,
  NavIcon,
  NavItem,
  Profile,
  ProfileInfo,
  Role,
  SidebarContainer,
} from './sidebar.styled.ts'

const menuIcons: Record<NavItemId, SvgIconComponent> = {
  users: PersonOutlinedIcon,
  communities: GroupsIcon,
  students: SchoolIcon,
  groups: LayersIcon,
  training: MenuBookIcon,
  events: EventIcon,
  news: NewspaperIcon,
  messages: ChatBubbleOutlinedIcon,
  favorites: StarBorderIcon,
  progress: BarChartIcon,
  settings: SettingsIcon,
  logout: LogoutIcon,
}

type SidebarProps = {
  currentId: NavItemId | null
  onSelect: (id: NavItemId) => void
}

export const Sidebar = ({ currentId, onSelect }: SidebarProps) => {
  return (
    <SidebarContainer>
      <Logo>
        <LogoIcon>
          <NexoLogo size={28} />
        </LogoIcon>
        <LogoText>{APP_NAME.toLowerCase()}</LogoText>
      </Logo>

      <Nav>
        {NAV_ITEMS.map((item) => {
          const Icon = menuIcons[item.id]

          return (
            <NavItem
              key={item.id}
              type="button"
              $active={currentId === item.id}
              onClick={() => onSelect(item.id)}
            >
              <NavIcon>
                <Icon fontSize="small" />
              </NavIcon>
              {item.label}
            </NavItem>
          )
        })}
      </Nav>

      <Profile>
        <Avatar>А</Avatar>
        <ProfileInfo>
          <Name>{ADMIN_PLACEHOLDER}</Name>
          <Role>Админ</Role>
        </ProfileInfo>
        <Chevron>
          <ExpandMoreIcon fontSize="small" />
        </Chevron>
      </Profile>
    </SidebarContainer>
  )
}
