import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { tokenContext } from '../shared/context/tokenContext';

export interface IPostsData {
  author?: string;
  title?: string;
  created?: number;
  created_utc?: number;
  banner_img?: string;
  icon_img?: string;
  score?: number;
}

export function usePostsData(postNum: number = 0) {
  const[posts, setPosts] = useState<IPostsData[]>([]);
  //   {
  //   banner_img: 'https://cdn.dribbble.com/userupload/11284843/file/original-729a663c6c024685c547d7f4a26c504e.png?resize=700x525&vertical=center',
  //   author: 'Me',
  //   icon_img: 'https://cdn.dribbble.com/userupload/11257354/file/original-c8dde8479f62510c1fa1365dfbeed2b1.jpg?resize=1200x900',
  // }

  const token = useContext(tokenContext);

  useEffect(() => {
    if (token && token !== 'undefined') {
      axios.get(
        'https://oauth.reddit.com/best.json?sr_detail=true'
      ).then((res) => {
        console.log(res.data.data.children);

        let postsList: object[] = [];
        const children = res.data.data.children;
        for (const child of children) {
          const postData = child.data;
          let postObj = {
            author: postData.author,
            title: postData.title,
            created: postData.created,
            created_utc: postData.created_utc,
            banner_img: postData.sr_detail.banner_img,
            icon_img: postData.sr_detail.icon_img,
            score: postData.score,
          }
          postsList = [...postsList, postObj];
        }

        setPosts(postsList);

        // setPosts({
        //   author: postData.author,
        //   title: postData.title,
        //   url: postData.url,
        //   created: postData.created,
        //   created_utc: postData.created_utc,
        //  });
      }).catch(console.log);
    }
  }, [token]);

  return [posts];
}