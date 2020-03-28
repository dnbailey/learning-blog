import React from "react"
import styled from "@emotion/styled"

import colors from "../styles/colors"

export default ({ children }) => <Header>{children}</Header>

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid ${colors.secondary};
  margin-bottom: 1em;
  & h2 {
    margin-bottom: 0.5em;
  }
  & a {
    text-decoration: none;
  }
`
