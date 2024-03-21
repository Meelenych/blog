import React from 'react';
import articleContent from './article-content';
import { Link } from 'react-router-dom';

const ArticlesList = () => {
	return (
		<div className='mt-20'>
			<h1 className='sm:text4xl text-2xl font-bold mb-7 text-violet-400'>
				ArticlesList
			</h1>
			<div className='container py-4 mx-auto'>
				<div className='flex flex-wrap -m-4'>
					{articleContent.map((article, index) => (
						<div
							key={index}
							className='p-4 md:w-1/4'>
							<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
								<Link to={`/article/${article.name}`}>
									<img
										className='lg:h-70 md:h-36 w-full object-cover object-center'
										src={article.thumbnail}
										alt={article.title}
									/>
								</Link>
								<div className='p-6'>
									<Link
										key={index}
										to={`/article/${article.name}`}>
										<h3 className='text-lg font-medium text-gray-900 mb-3'>
											{article.title}
										</h3>
									</Link>
									<p className='leading-relaxed mb-3'>
										{article.content[0].substring(0, 50)}...
									</p>
									<div className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
										<Link to={`/article/${article.name}`}>Learn more</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ArticlesList;
