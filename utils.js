export function parseData({ data }){
    console.log(data);
    let members = []
    data.map((e) => {
        const member = {
        id: e.id,
        name: e.name};
    members.push(member);
    });
    return members;
}