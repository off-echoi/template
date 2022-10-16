import { css } from '@emotion/react';
import tw, { styled } from 'twin.macro';

interface IconProps {
  index: number;
}

const IconDiv = styled.div<IconProps>(({ index }) => [
  tw`
  md:w-10 md:flex-shrink-0 md:mt-20 
`,
  css`
    position: relative;
    &::before {
      content: '0${index}';
      padding: ${index};
    }
  `,
]);

interface IconProps {
  index: number;
}
export const Icon = ({ index }: IconProps) => {
  return <IconDiv index={index} />;
};
