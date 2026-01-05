import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            Home
        </Link>,
        
        <Typography key="3" sx={{ color: 'text.primary' }}>
            Cart
        </Typography>,
    ];

    return (
        <div className='md:mx-auto md:max-w-303 mt-7 ml-3'>

            <Stack spacing={2}>

                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
        </div>
    );
}
