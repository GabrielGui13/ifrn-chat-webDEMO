import Link from 'next/link'

export const membros = [
  {
    id: 1,
    nome: 'Gabriel'
  },
  {
    id: 2,
    nome: 'Fonti'
  },
  {
    id: 3,
    nome: 'Bruce'
  },
  {
    id: 4,
    nome: 'Arael'
  },
  {
    id: 5,
    nome: 'Edson'
  },
]

export default function Members() {
  const ROUTE_MEMBER = 'members/[id]'

  return (
    <>
      {membros.map((member, index) => (
        <div key={index}>
          <Link 
            href={{
              pathname: ROUTE_MEMBER,
              query: { id: member.id }
            }}
          >
            <h1> Membro {index + 1}: {member.nome} </h1>
          </Link>
        </div>
      ))}
    </>
  )
}