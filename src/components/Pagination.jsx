import React from 'react';

function Pagination({ friendsCount, currentPage, pageSize, handlePageChange }) {
	const getRange = (start, end) => {
		let length = end - start + 1;
		return Array.from({ length }, (_, idx) => idx + start);
	};

	const handlePreviousPageClick = () => {
		handlePageChange(currentPage - 1);
	};

	const handleNextPageClick = () => {
		handlePageChange(currentPage + 1);
	};

	const totalPageCount = Math.ceil(friendsCount / pageSize);
	const paginationRange = getRange(1, totalPageCount);
	let lastPage = paginationRange[paginationRange.length - 1];

	// Hide the component if there is only 1 page to show
	if (paginationRange.length < 2) {
		return null;
	}

	return (
		<ul className='pagination'>
			{friendsCount}
			<li
				key='previous'
				className={`page ${currentPage === 1 ? 'disabled' : ''}`}
				onClick={handlePreviousPageClick}>
				<div className='left-arrow'> ArrowLeft </div>
			</li>
			{paginationRange.map((pageNumber) => {
				return (
					<li
						className={`page ${
							pageNumber === currentPage ? 'selected' : ''
						}`}
						key={pageNumber}
						onClick={() => handlePageChange(pageNumber)}>
						{pageNumber}
					</li>
				);
			})}
			<li
				key='next'
				className={`page ${currentPage === lastPage ? 'disabled' : ''}`}
				onClick={handleNextPageClick}>
				<div className='left-arrow'> ArrowRight </div>
			</li>
		</ul>
	);
}

export { Pagination };
