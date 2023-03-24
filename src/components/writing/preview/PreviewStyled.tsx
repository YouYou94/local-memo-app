import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  border-left: 1px solid rgb(204, 204, 204);
  padding: 2rem;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Section = styled.section`
  white-space: pre-wrap;
`;

export const Span = styled.span`
  line-height: 0%;
`;
export const Br = styled.br``;

/* H1 ~ H6 */
export const H1 = styled.h1`
  font-size: 2rem;
`;
export const H2 = styled.h2`
  font-size: 1.5rem;
`;
export const H3 = styled.h3`
  font-size: 1.17rem;
`;
export const H4 = styled.h4`
  font-size: 1rem;
`;
export const H5 = styled.h5`
  font-size: 0.83rem;
`;
export const H6 = styled.h6`
  font-size: 0.67rem;
`;

/* List */
export const ListSpan = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ListDot = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

/* Line */
export const Line = styled.div`
  margin: 0.5rem 0;
  border: 1px solid rgb(204, 204, 204);
`;
