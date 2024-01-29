import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { CardsList, Content, Header, Layout } from './components';
import './main.css';
import { useToken } from '../hooks/useToken';
import { tokenContext } from './context/tokenContext';
import { UserContextProvider, userContext } from './context/userContext';
import { commentContext } from './context/commentContext';


function AppComponent() {
  const [commentValue, setCommentValue] = useState('');
  const [token] = useToken();

  const CommentProvider = commentContext.Provider;

  return(
    <CommentProvider value={{
      value: commentValue,
      onChange: setCommentValue,
    }}>
      <tokenContext.Provider value={token}>
        <UserContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </UserContextProvider>
      </tokenContext.Provider>
    </CommentProvider>
  );
}

export const App = hot(() => <AppComponent />);