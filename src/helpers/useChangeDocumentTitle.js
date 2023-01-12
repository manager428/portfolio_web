import { useEffect } from 'react';

export const useChangeDocumentTitle = (pageTitle) => {
	useEffect(() => {
		document.title = `John Marcos | Personal Portfolio - ${pageTitle}`;
	}, [pageTitle]);
};
