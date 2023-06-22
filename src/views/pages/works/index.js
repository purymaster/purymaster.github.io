import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import List from '@/data/work';

export default function Works() {
  const [isLayoutActive, setIsLayoutActive] = useState(false);
  useEffect(() => {
    setIsLayoutActive(true);
  }, []);

  return (
    <Container>
      <ul className={isLayoutActive ? 'active' : ''}>
        {List.data.map((data) => (
          <li key={data.id}>
            <Link to={`/works/${data.acronym}`} state={data}>
              <img src={data.image?.url} alt="" />
              <div className="cover">
                <span className="tit">{data.acronym}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  padding: 30px 0;
  text-align: center;
  ul {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    li {
      position: relative;
      flex: 0 1 calc(33.33% - 20px);
      box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
      opacity: 0;
      transition: all 1s;
      will-change: transform;
      &:nth-child(3n),
      &:nth-child(3n + 1) {
        top: 0;
        transform: translateY(-100px);
      }
      &:nth-child(3n + 2) {
        top: 30px;
        transform: translateY(100px);
      }
      a {
        display: block;
        position: relative;
        border: 1px solid ${(props) => props.theme.borderColor};
        .cover {
          display: flex;
          position: absolute;
          visibility: hidden;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          color: #fff;
          text-transform: uppercase;
          opacity: 0;
          transition: all 0.3s;
          justify-content: center;
          align-items: center;
          .tit {
            font-weight: 700;
            opacity: 0;
            transition: all 0.3s;
            transform: scale(1.2);
          }
        }
        &:hover {
          img {
            filter: brightness(75%) blur(1px);
          }
          .cover {
            visibility: visible;
            background: rgba(0, 0, 0, 0.5);
            opacity: 1;
            .tit {
              opacity: 1;
              transform: scale(1);
            }
          }
        }
      }
    }
    &.active {
      li {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  @media (max-width: 1024px) {
    ul {
      li {
        flex: 0 1 calc(50% - 15px);
        box-shadow: none;
        &:nth-child(3n),
        &:nth-child(3n + 1),
        &:nth-child(3n + 2) {
          top: 0;
          transform: translateY(0);
        }
        a {
          border: 0;
          img {
            border: 1px solid ${(props) => props.theme.borderColor};
            box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
          }
          .cover {
            position: static;
            margin-top: 10px;
            visibility: visible;
            opacity: 1;
            color: ${(props) => props.theme.subTextColor};
            .tit {
              opacity: 1;
              transform: none;
            }
          }
          &:hover {
            filter: none;
            img {
              filter: none;
            }
            .cover {
              background: none;
            }
          }
        }
      }
    }
  }
  @media (max-width: 599px) {
    ul {
      gap: 30px 15px;
      li {
        flex: 0 1 100%;
      }
    }
  }
`;
