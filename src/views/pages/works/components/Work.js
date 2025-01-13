import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Code, FileText, Tag, ExternalLink, List, ArrowRightCircle } from 'react-feather';

import Button from '@/views/shared/form/button';

export default function Work() {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  const handlePageBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      {data && (
        <div className="work">
          <div className="img">
            <img src={data.image.url} alt="" />
          </div>
          <div className="info">
            <h1>{data.name}</h1>
            <ul className="category">
              {data.taskDuration && (
                <li>
                  <h2 className="tit">
                    <Calendar size={16} />
                    작업기간
                  </h2>
                  <div className="txt">
                    {data.taskDuration.startAt} ~ {data.taskDuration.endAt}
                  </div>
                </li>
              )}
              {data.spec && (
                <li>
                  <h2 className="tit">
                    <Code size={16} />
                    사용기술
                  </h2>
                  <div className="txt">
                    <ul>
                      {data.spec.map((data, index) => (
                        <li key={index}>{data}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              )}
              {data.info && (
                <li>
                  <h2 className="tit">
                    <FileText size={16} />
                    설명
                  </h2>
                  <div className="txt">
                    <ul>
                      {data.info.map((data, index) => (
                        <li key={index}>{data}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              )}
              {data.note && (
                <li>
                  <h2 className="tit">
                    <Tag size={16} />
                    비고
                  </h2>
                  <div className="txt">
                    <ul>
                      {data.note.map((data, index) => (
                        <li key={index}>{data}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              )}
              {data.link && data.link.url && (
                <li>
                  <h2 className="tit">
                    <ExternalLink size={16} />
                    링크
                  </h2>
                  <div className="txt">
                    <Button href={data.link.url} icon={<ArrowRightCircle size={16} />} text="페이지 이동" />
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
      <div className="button_wrap">
        <Button onClick={handlePageBack} icon={<List size={16} />} text="목록" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 30px 0;
  .work {
    display: flex;
    gap: 30px;
    .img {
      width: 50%;
      text-align: center;
      img {
        border-radius: 0.5em;
        box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
      }
    }
    .info {
      width: 50%;
      padding: 30px 0;
      border-top: 1px solid ${(props) => props.theme.subTextColor};
      border-bottom: 1px solid ${(props) => props.theme.subTextColor};
      h1 {
        margin-bottom: 0.5em;
        font-weight: 700;
        font-size: 1.5em;
      }
      .category {
        > li {
          margin-top: 1.5em;
          .tit {
            display: flex;
            margin-bottom: 0.5em;
            font-weight: 700;
            font-size: 1.1em;
            align-items: center;
            svg {
              margin-right: 5px;
            }
          }
          .txt {
            color: ${(props) => props.theme.subTextColor};
            margin-top: 5px;
            li {
              position: relative;
              padding-left: 0.75em;
              &:before {
                content: '';
                position: absolute;
                left: 0;
                top: 0.75em;
                width: 4px;
                height: 4px;
                margin-top: -2px;
                background: ${(props) => props.theme.subTextColor};
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
    @media (max-width: 1024px) {
      flex-direction: column;
      .img {
        width: 100%;
      }
      .info {
        width: 100%;
      }
    }
  }
  .button_wrap {
    margin-top: 50px;
    text-align: center;
    @media (max-width: 1024px) {
      margin-top: 30px;
    }
  }
`;
