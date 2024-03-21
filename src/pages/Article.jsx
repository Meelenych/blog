import React from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content';

const Article = () => {
	const { name } = useParams();
	const article = articleContent.find(article => article.name === name);
	return !article ? (
		<div className='mt-20'>
			<h1 className='sm:text4xl text-2xl font-bold mb-7 text-violet-400'>
				Sorry, nothing like that found!
			</h1>
		</div>
	) : (
		<div className='mt-20'>
			<h1 className='sm:text4xl text-2xl font-bold mb-7 text-violet-400'>
				Here is my {article.title} article!
			</h1>
			{article.content.map((paragraph, index) => (
				<p
					className='mx-auto leading-relaxed text-base mb-4'
					key={index}>
					{paragraph}
				</p>
			))}
		</div>
	);
};

export default Article;
