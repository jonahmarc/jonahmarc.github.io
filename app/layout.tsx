import { Fira_Code } from 'next/font/google';

import "@/styles/globals.css";
import AppLayout from "@/components/AppLayout";

const fira_code = Fira_Code({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`m-0 p-0 ${fira_code.className}`}>
      <head>
        <title>Jonah&apos;s Portfolio</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="m-0 p-0
        w-full h-screen
        bg-gradient-to-b from-secondary-dark-blue via-[#212F5A] to-primary-dark-blue
        text-primary-light-blue
        flex flex-col items-center">
          <AppLayout>
            {children}
          </AppLayout>
      </body>
    </html>
  )
}
