import { CONTENT_BASE } from 'fusion:environment'

const resolve = (query) => {
  const {_id:id} = query;
  const requestUri = `${CONTENT_BASE}/site/v3/`
  if (query.hasOwnProperty('_id')) {
      return`${requestUri}navigation/rpalatam?hierarchy=${id}`
  }

  throw new Error('content-nota content source requires a url')
}

export default {
  resolve,
  schemaName:'site-navigation',
  params: {
    _id: 'text',
  },
}