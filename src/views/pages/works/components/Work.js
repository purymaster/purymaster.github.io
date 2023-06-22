import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { GitHub, Calendar, Code, FileText, Tag, ExternalLink, List } from 'react-feather';

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
            <dl>
              {data.taskDuration && (
                <div>
                  <dt>
                    <Calendar size={16} />
                    작업기간
                  </dt>
                  <dd>
                    {data.taskDuration.startAt} ~ {data.taskDuration.endAt}
                  </dd>
                </div>
              )}
              {data.spec && (
                <div>
                  <dt>
                    <Code size={16} />
                    사용기술
                  </dt>
                  <dd>
                    <ul>
                      {data.spec.map((data, index) => (
                        <li key={index}>{data}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
              {data.info && (
                <div>
                  <dt>
                    <FileText size={16} />
                    설명
                  </dt>
                  <dd>
                    <ul>
                      {data.info.map((data, index) => (
                        <li key={index}>{data}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
              {data.note && (
                <div>
                  <dt>
                    <Tag size={16} />
                    비고
                  </dt>
                  <dd>
                    <ul>
                      {data.note.map((data, index) => (
                        <li key={index}>{data}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
              {data.link && data.link.url && (
                <div>
                  <dt>
                    <ExternalLink size={16} />
                    링크
                  </dt>
                  <dd>
                    <Button href={data.link.url} icon={<GitHub size={16} />} text="Github" />
                  </dd>
                </div>
              )}
            </dl>
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
        border: 1px solid ${(props) => props.theme.borderColor};
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
      dl {
        > div {
          margin-top: 1.5em;
          dt {
            display: flex;
            font-weight: 700;
            font-size: 1.1em;
            align-items: center;
            svg {
              margin-right: 5px;
            }
          }
          dd {
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
