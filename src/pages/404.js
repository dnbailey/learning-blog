import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import styled from "@emotion/styled"

export default () => {
  return (
    <Layout title="Page Not Found">
      <Content>
        <h2>Oops... Couldn't Find That Page</h2>
        <img src="/404.png" alt="An empty pizza box" />
        <p>
          A perfectly enticing pizza box sitting on a table. You open it filled
          with anticipation. And find… nothing but scraps. Perhaps a half eaten
          crust. And a lot of grease. The anticipation turns to deep
          disappointment and despair. There’s nothing left!
        </p>
        <p>
          <Link to="/">Go back to home.</Link>
        </p>
        <p>
          <small>
            Thanks to the team at{" "}
            <a href="https://www.kapwing.com/404-illustrations">Kapwing</a> for
            a great 404 illustration.
          </small>
        </p>
      </Content>
    </Layout>
  )
}

const Content = styled.section`
  text-align: center;
  & img {
    width: 400px;
  }
`
