import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {
console.log(posts)
const articles = posts.map((post) => {
    return (
        <Article 
        key={post.id}
        title={post.title}
        date={post.date}
        minutes={post.minutes}
        preview={post.preview}
        />
    )
});
    return (
        <main>{articles}</main>
    )
}

export default ArticleList;
