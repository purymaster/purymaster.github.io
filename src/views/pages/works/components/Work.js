import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { GitHub } from 'react-feather';

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
        <>
          <div className="img">
            <img src={data.image.url} alt="" />
          </div>
          <div className="info">
            <h1>{data.name}</h1>
            <dl>
              {data.taskDuration && (
                <div>
                  <dt>작업기간</dt>
                  <dd>
                    {data.taskDuration.startAt}~{data.taskDuration.endAt}
                  </dd>
                </div>
              )}
              {data.spec && (
                <div>
                  <dt>사용기술</dt>
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
                  <dt>설명</dt>
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
                  <dt>비고</dt>
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
                  <dt>링크</dt>
                  <dd>
                    <a href={data.link.url} target="_blank" rel="noreferrer">
                      <GitHub size={16} />
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>
          <button type="button" onClick={handlePageBack}>
            뒤로
          </button>
        </>
      )}
    </Container>
  );
}

const Container = styled.div``;
