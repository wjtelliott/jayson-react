/** @format */

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { centeredFlexBox } from '../Shared/StylePresets';

const LandingPage = function () {
    const [responseData, setResponseData] = useState({ status: 'Loading' });
    const [backendAlive, setBackendAlive] = useState(true);

    useEffect(() => {
        const abortContoller = new AbortController();

        // This eval is required on all pages that want to use AOS
        /* eslint-disable-next-line */
        eval('AOS.init()');

        const fetchData = async () => {
            // If we are running on localhost, we have to specify port in env
            const url = `${process.env.REACT_APP_APIURL}/sanity`;
            const response = await fetch(url);
            response
                .json()
                .then(data => setResponseData(data))
                .catch(_ => {
                    setResponseData({ error: 'Response was not JSON format' });
                    setBackendAlive(false);
                });
        };
        fetchData();

        return () => abortContoller.abort();
    }, []);

    const inlineStyleContent = `
#content-container > * {
    width: 100%;
}
`;

    return (
        <Box
            id="content-container"
            sx={{ ...centeredFlexBox, p: 3, my: 3 }}
        >
            {/* We can also inline style here */}
            <style>{inlineStyleContent}</style>

            <Typography
                variant="h3"
                textAlign="center"
            >
                Here is the env var test:{' '}
                {process.env.REACT_APP_TEST ?? 'error: NO .ENV LOADED'}
            </Typography>
            <Typography
                variant="h4"
                textAlign="center"
            >
                Here is a request to our linked back-end:{' '}
                {JSON.stringify(responseData)}
            </Typography>
            {!backendAlive && (
                <Typography
                    variant="h5"
                    textAlign="center"
                >
                    If you are working client side only, the server will not
                    respond.
                </Typography>
            )}
        </Box>
    );
};

export default LandingPage;
