import styled, { css } from 'styled-components';

export default function Button({ className, onClick, icon, text, href }) {
  const Container = styled.button`
    display: inline-flex;
    position: relative;
    padding: 0.25em 1em;
    border: 1px solid ${(props) => props.theme.subTextColor};
    background: none;
    color: ${(props) => props.theme.subTextColor};
    font-size: 1em;
    line-height: 1.5em;
    align-items: center;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 0;
      height: 100%;
      background: ${(props) => props.theme.primaryColor};
      transition: all 0.3s;
    }
    &:hover {
      color: #fff;
      &:after {
        width: 100%;
      }
    }
    svg {
      margin-right: 5px;
    }

    ${href &&
    css`
      text-decoration: none;
    `}
  `;

  return (
    <Container
      type={href ? undefined : 'button'}
      target={href ? '_blank' : undefined}
      className={className}
      onClick={onClick}
      href={href}
      as={href ? 'a' : 'button'}
    >
      {icon}
      {text}
    </Container>
  );
}
