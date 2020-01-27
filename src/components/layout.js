import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import '../sass/layout.scss';

const Layout = ({ children }) => {
	return (
		<div className='layout'>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	);
};

export default Layout;
