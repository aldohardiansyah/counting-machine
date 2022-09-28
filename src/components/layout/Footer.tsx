import React from 'react'

const Footer = (props: any) => {
  return (
    <footer>
      <div
        id='footer-wrapper'
        className='mt-10 mb-0 mx-auto max-w-5xl px-7 py-7 h-full text-center text-sm text-zinc-300 border-t-2 border-zinc-100 dark:border-zinc-500'>
        {new Date().getFullYear()} © Aldo Hardiansyah | All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer