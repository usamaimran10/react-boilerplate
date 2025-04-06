import { QueryParams } from "@/types/utils";
import qs from "query-string";

export default function formatUrl(
  url: string,
  queryParam: QueryParams | string
) {
  if (Object.keys(queryParam).length !== 0) {
    queryParam = qs.stringify(queryParam as QueryParams, {
      skipEmptyString: true,
      skipNull: true,
    });
    return `${url}?${queryParam}`;
  }
  return url;
}
