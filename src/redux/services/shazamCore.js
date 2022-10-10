import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

/* const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5ff69d6c00msh9eec15b597770dap1d4f41jsn8b588032000d',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  }; */
  
/*   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err)); */

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '5ff69d6c00msh9eec15b597770dap1d4f41jsn8b588032000d');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query:() => '/charts/world'}),
        getSongDetails: builder.query({query: ({ songid }) => `/tracks/details?track_id=${songid}`}),
        getSongRelated: builder.query({query:(({ songid }) => `/tracks/related?track_id=${songid}`)}),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
} = shazamCoreApi;