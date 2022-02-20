import {useCallback, useEffect} from 'react';
import {useRecoilState} from 'recoil';
// import {useDispatch, useSelector} from 'react-redux';

import {getPosts} from '../api/getPosts';
import {postsState} from '../atoms/posts';
// import {fetchPosts} from '../slices/posts';

export default function usePosts(
  {enabled}: {enabled: boolean} = {enabled: true},
) {
  const [{loading, data, error}, set] = useRecoilState(postsState);
  // const posts = useSelector(state => state.posts.posts);
  // const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    set({loading: true, data: null, error: null});

    try {
      const posts = await getPosts();
      set({loading: false, data: posts, error: null});
    } catch (e) {
      set({loading: false, data: null, error: e as Error});
    }
  }, [set]);
  // const fetchData = useCallback(() => {
  //   dispatch(fetchPosts());
  // }, [dispatch]);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    fetchData();
  }, [enabled, fetchData]);

  return {
    loading,
    data,
    error,
    refetch: fetchData,
  };
}
