import './post.css';
import { IPost } from './types';

export const Post = ({post}: {post: IPost}) => {

  return (
    <article className="post-item">
        <h2 className="post-title">
            {post.title}
        </h2>

        <div className="post-body">
            {post.body}
        </div>
    </article>
  )
}