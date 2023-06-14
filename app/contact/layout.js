export const metadata = {
  title: 'Contact | Designing for Impact | Victoria Alli-Johnson',
  description: 'Developed by Howard Otuya',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center relative">{children}</body>
    </html>
  )
}
