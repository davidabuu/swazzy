import React from 'react'
import Head from 'next/head'
const UserWebLayout = ({webtitle, children}) => {
  return (
    <div>
         <Head>
        <title>{webtitle}</title>
        <meta name="description" content="Swazzy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  )
}

export default UserWebLayout