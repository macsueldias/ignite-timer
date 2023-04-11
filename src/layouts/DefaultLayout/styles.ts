import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;

  margin: 5rem auto;

  padding: 7rem 2.5rem;

  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 32rem;
    margin-inline: 0.5rem;
    padding: 7rem 0.5rem;
  }
`
