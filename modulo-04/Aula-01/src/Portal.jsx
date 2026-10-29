import Botao from './Botao'

function Portal() {
  const nome = 'Jan' 

  return (
    <div>
      <p>{nome}</p>
      <p>{5 + 5}</p>
      <p>{nome === 'Jan' || nome === 'Lucas' ? 'Professor' : 'Aluno'}</p>
      <Botao />
    </div>
  )
}

export default Portal
