import { CONTENT_BASE } from 'fusion:environment'

const resolve = (query) => {
  const {website_url:websiteUrl} = query;
  const requestUri = `${CONTENT_BASE}/content/v4/`
  if (query.hasOwnProperty('website_url')) {
      return`${requestUri}?website_url=${websiteUrl}&website=rpalatam&published=true`
  }

  throw new Error('content-nota content source requires a url')
}

export default {
  resolve,
  params: {
    website_url: 'text',
  },
}