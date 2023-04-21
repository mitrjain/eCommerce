import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

export default function SimpleBackdrop() {
	const [ open, setOpen ] = React.useState(false);

	useEffect(() => {
		const handleOpen = () => {
			setOpen(true);
		};
		handleOpen();
	}, []);

	return (
		<div>
			{/* <Button onClick={handleOpen}>Show backdrop</Button> */}
			<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</div>
	);
}
