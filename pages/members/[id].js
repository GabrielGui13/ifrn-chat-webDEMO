import { membros } from './index'

export default function Member(props) {
  return (
    <>
      <h1>{props.member.email}</h1>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: {
        membros: membros.map((member, index) => {
          return {
            id: member.id
          }
        })
      } }
    ],
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const member = members.find(m => m.id == params.id)
  return {
    props: {
      member
    }, // will be passed to the page component as props
  }
}