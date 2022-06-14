/**
 * 
 * @param slug https://www.notion.so/La-thu-so-450-35937c84529d45dd95e543be34a1309a
 * @returns 35937c84529d45dd95e543be34a1309a
 */

 export function getIdInSlug(slug: string) {
  if (typeof slug !== 'string' || !slug.includes('-')) return '';
  const splitSlugArr = slug.split('-');
  return splitSlugArr[splitSlugArr.length - 1];
}

export function jsonDecode(json: string) {
  if (typeof json !== 'string') {
    return undefined;
  }

  try {
    return JSON.parse(json);
  }catch(err) {
    return undefined;
  }
}