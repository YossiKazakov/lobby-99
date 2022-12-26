import { MEMBERS_TABLE_NAME } from "../config";
import { client } from "../database";

export async function useData() {
    const {data, error} = await client.from(MEMBERS_TABLE_NAME).select('*');

    return {
      data,
      isLoading: !error && !data,
      isError: error
    }
}