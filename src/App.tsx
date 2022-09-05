import React, { useState, useEffect } from 'react';
import GlobalStyle from './Styles/GlobalStyle';
import GlobalFont from './Styles/GlobalFont';
import styled from 'styled-components';
// react-sortablejs
import { ReactSortable } from 'react-sortablejs';

interface ItemType {
  id: number;
  name: string;
}

function App(): JSX.Element {
  const [dragList, setDragList] = useState<ItemType[]>([
    { id: 1, name: 'shrek' },
    { id: 2, name: 'fiona' },
    { id: 3, name: 'asher' },
    { id: 4, name: 'ethan' },
    { id: 5, name: 'hannah' },
    { id: 6, name: 'john' },
  ]);

  useEffect(() => {
    console.log('dragList', dragList);
  }, [dragList]);

  return (
    <>
      <GlobalStyle />
      <GlobalFont />
      <ListWrapper>
        <ReactSortable list={dragList} setList={setDragList} animation={500} handle=".draggable">
          {dragList.map((item) => (
            <List key={item.id}>
              {item.name} <span className="draggable">👻</span>
            </List>
          ))}
        </ReactSortable>
      </ListWrapper>
    </>
  );
}

export default App;

const ListWrapper = styled.section`
  width: 500px;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 70px;
  background-color: beige;
  font-size: 30px;
  border: 1px solid #000;
  .draggable {
    cursor: pointer;
  }
`;
