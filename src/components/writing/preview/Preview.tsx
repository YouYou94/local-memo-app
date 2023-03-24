import { Fragment } from 'react';
import {
  Box,
  Section,
  Span,
  Br,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  ListSpan,
  ListDot,
  Line,
  ItalicSpan,
  ThroughSpan,
} from './PreviewStyled';

type PreviewProps = {
  state: string;
};

export const Preview = ({ state }: PreviewProps) => {
  return (
    <Box>
      <Section>
        {state.split('\n').map((v, index) => {
          let value = null;
          /* ──────────────────────────────────────── */
          /* H1 ~ H6 */
          if (v.substring(0, 7) === '###### ')
            value = <H6>{v.substring(7)}</H6>;
          else if (v.substring(0, 6) === '##### ')
            value = <H5>{v.substring(6)}</H5>;
          else if (v.substring(0, 5) === '#### ')
            value = <H4>{v.substring(5)}</H4>;
          else if (v.substring(0, 4) === '### ')
            value = <H3>{v.substring(4)}</H3>;
          else if (v.substring(0, 3) === '## ')
            value = <H2>{v.substring(3)}</H2>;
          else if (v.substring(0, 2) === '# ')
            value = <H1>{v.substring(2)}</H1>;
          /* ──────────────────────────────────────── */
          /* LIST */ else if (v.substring(0, 2) === '- ')
            value = (
              <ListSpan>
                <ListDot> · </ListDot>
                {v.substring(2)}
                <Br />
              </ListSpan>
            );
          /* ──────────────────────────────────────── */
          /* LINE */ else if (
            v.substring(0, 3) === '---' ||
            v.substring(0, 3) === '___' ||
            v.substring(0, 3) === '***'
          )
            value = <Line />;
          /* ──────────────────────────────────────── */
          /* ITALIC */ else if (v.includes('_'))
            value = (
              <Span>
                {v
                  .replaceAll('_', '〃_〃')
                  .split('〃')
                  .map((element, index) => {
                    let italicValue = null;

                    if (element === '') italicValue = null;
                    else if (
                      v.replaceAll('_', '〃_〃').split('〃')[index - 1] ===
                        '_' &&
                      v.replaceAll('_', '〃_〃').split('〃')[index + 1] === '_'
                    )
                      italicValue = <ItalicSpan>{element}</ItalicSpan>;
                    else if (element === '_') italicValue = null;
                    else italicValue = element;

                    return italicValue;
                  })}
                <Br />
              </Span>
            );
          /* ──────────────────────────────────────── */
          /* LINE THROUGH */ else if (v.includes('~~'))
            value = (
              <Span>
                {v
                  .replaceAll('~~', '〃~~〃')
                  .split('〃')
                  .map((element, index) => {
                    let italicValue = null;

                    if (element === '') italicValue = null;
                    else if (
                      v.replaceAll('~~', '〃~~〃').split('〃')[index - 1] ===
                        '~~' &&
                      v.replaceAll('~~', '〃~~〃').split('〃')[index + 1] ===
                        '~~'
                    )
                      italicValue = <ThroughSpan>{element}</ThroughSpan>;
                    else if (element === '~~') italicValue = null;
                    else italicValue = element;

                    return italicValue;
                  })}
                <Br />
              </Span>
            );
          /* ──────────────────────────────────────── */
          /* DEFAULT */ else
            value = (
              <Span>
                {v}
                <Br />
              </Span>
            );

          return <Fragment key={index}>{value}</Fragment>;
        })}
      </Section>
    </Box>
  );
};
