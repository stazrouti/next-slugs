import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  let content;
  if (slug === 'Blog1') content = 'Blog1';
  else if (slug === 'Blog2') content = 'Blog2';
  else if (slug === 'Blog3') content = 'Blog3';
  else content = 'Post undefined';

  return (<p>Post: {content}</p>);
};

export default Post;
