import * as S from './styles'

export const Main = ({ title = 'Teste Constrols ', describe = '' }) => {
	return (
		<S.Wrapper>
			<h1>{title}</h1>
			<p>{describe}</p>
		</S.Wrapper>
	)
}
