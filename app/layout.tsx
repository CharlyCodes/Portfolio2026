import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

export const metadata: Metadata = {
  title: 'Charly.codes | Game Developer & Tech Educator',
  description: 'Portafolio de Carlos Chin – Game Developer especializado en Roblox, Godot y Unity. Tech Educator y WCA Junior Delegate Nacional.',
  keywords: ['game developer', 'roblox studio', 'godot', 'unity', 'tech educator', 'mérida yucatán'],
  authors: [{ name: 'Carlos Ricardo Chin Dzul' }],
  openGraph: {
    title: 'Charly.codes | Game Developer',
    description: 'Creando mundos cozy y experiencias educativas con videojuegos.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
