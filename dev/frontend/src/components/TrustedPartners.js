import React from 'react';

/**
 * This component has the brand names and logos of the partners associated with this site. 
 */
function TrustedPartners() {
	return (
		<div className="colorlib-partner">
			<div className="container">
				<div className="row">
					<div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
						<h2>Trusted Partners</h2>
					</div>
				</div>
				<div className="row">
					<div className="col partner-col text-center">
						<img
							src="assets/images/brand-1.jpg"
							className="img-fluid"
							alt="Free html4 bootstrap 4 template"
						/>
					</div>
					<div className="col partner-col text-center">
						<img
							src="assets/images/brand-2.jpg"
							className="img-fluid"
							alt="Free html4 bootstrap 4 template"
						/>
					</div>
					<div className="col partner-col text-center">
						<img
							src="assets/images/brand-3.jpg"
							className="img-fluid"
							alt="Free html4 bootstrap 4 template"
						/>
					</div>
					<div className="col partner-col text-center">
						<img
							src="assets/images/brand-4.jpg"
							className="img-fluid"
							alt="Free html4 bootstrap 4 template"
						/>
					</div>
					<div className="col partner-col text-center">
						<img
							src="assets/images/brand-5.jpg"
							className="img-fluid"
							alt="Free html4 bootstrap 4 template"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TrustedPartners;
