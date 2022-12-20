export function parseData({ data }){
    let members = []
    data.forEach((e) => {
        const member = {
        id: e.id,
        name: e.name};
    members.push(member);
    });
    return members;
}