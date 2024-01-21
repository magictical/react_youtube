import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { YoutubeApiProvider } from './context/youtubeApiContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <SearchHeader />
      {/* 커스텀 api를 위한 컨텍스트 */}
      <YoutubeApiProvider>
        {/* useQuery의 데이터를 주고 받기위한 컨텍스트 */}
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
