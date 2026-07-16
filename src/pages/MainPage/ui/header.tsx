import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import EditSquareIcon from '@mui/icons-material/EditSquare'
import { Button } from '../../../shared/ui'
import {
  Actions,
  HeaderBar,
  SearchIconWrap,
  SearchInput,
  SearchWrap,
} from './header.styled.ts'

export const Header = () => {
  const [search, setSearch] = useState('')

  const onFilter = () => console.log('Фильтр')
  const onEdit = () => console.log('Редактировать')
  return (
    <HeaderBar>
      <Actions>
        <SearchWrap>
          <SearchIconWrap>
            <SearchIcon fontSize="small" />
          </SearchIconWrap>
          <SearchInput
            type="text"
            placeholder="Поиск сообщений"
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
        </SearchWrap>
        <Button $variant="secondary" onClick={onFilter} aria-label="Фильтр">
          <FilterAltIcon fontSize="small" />
        </Button>
        <Button onClick={onEdit} aria-label="Редактировать">
          <EditSquareIcon fontSize="small" />
        </Button>
      </Actions>
    </HeaderBar>
  )
}
