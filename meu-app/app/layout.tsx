import "@/app/globals.css"
export default function RootLayout({ children }: {
  children:
  React.ReactNode
  //children esta representando o conteudo da pagina 
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Lista de Tarefas</title>
      </head>
      <body>{children}</body>
    </html>
  )
}