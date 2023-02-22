import React from 'react';

/**
 * This component contains the Men's and Women's collection images displayed on the Home page. 
 * Once clicked, the user will be redirected to the corresponding /men or /women pages. 
 */
function HomeCollection() {
	return (
		<div className="colorlib-product">
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-6 text-center">
						<div className="featured">
							<a
								href="#"
								className="featured-img"
								style={{ backgroundImage: 'url(assets/images/men.jpg)' }}
							/>
							<div className="desc">
								<h2>
									<a href="#">Shop Men's Collection</a>
								</h2>
							</div>
						</div>
					</div>
					<div className="col-sm-6 text-center">
						<div className="featured">
							<a
								href="#"
								className="featured-img"
								style={{ backgroundImage: 'url(assets/images/women.jpg)' }}
							/>
							<div className="desc">
								<h2>
									<a href="#">Shop Women's Collection</a>
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeCollection;
