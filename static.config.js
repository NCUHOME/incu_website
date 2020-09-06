import path from 'path'
import React from 'react'

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  Document: ({
    Html,
    Head,
    Body,
    children,
    renderMeta
  }) => (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-stylus',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
