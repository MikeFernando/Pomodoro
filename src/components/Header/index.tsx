import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoImg from '../../assets/logo-ignite.svg'

import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={logoImg} alt="" />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  )
}
