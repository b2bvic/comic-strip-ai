import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Create Your Comic | ComicStripAI",
  description: "Turn your story into a comic in seconds with our advanced AI comic generator."
}

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
