import { MEMBERS_TABLE_NAME } from "./config";
import { client } from "./database";

export function parseData({ data }) {
    // console.log(data);
    let members = []
    data.map((e) => {
        const member = {
            id: e.id,
            name: e.name
        };
        members.push(member);
    });
    return members;
}

export function calculateTime({ join_at }) {
    return years, months, days;
}

// export async function numberOfMembers() {
//     const { data } = await client.from(MEMBERS_TABLE_NAME).select('*')
//     // return Object.keys(data).map(key => data[key]).length;
//     return data.length
// }