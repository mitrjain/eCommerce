import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

/**
 * This returns the bannerr that announces the sitewide sale. 
 */
function Sale() {
	return (
		<div className="sale">
			<div className="container">
				<div className="row">
					<div className="col-sm-8 offset-sm-2 text-center">
						<div className="row">
							<div className="owl-carousel2">
								<div className="item">
									<div className="col">
										<h3>
											<a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a>
										</h3>
									</div>
								</div>
								<div className="item">
									<div className="col">
										<h3>
											<a href="#">Our biggest sale yet 50% off all summer shoes</a>
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sale;
