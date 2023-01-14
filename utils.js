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

export function calculateTime({ join_at })
{
    const current = new Date();
    const join = new Date(join_at);
    const diff = new Date(current - join);
    console.log(diff);
    return ({years: (diff.getFullYear() - 1970), months: diff.getMonth(), days: (diff.getDate() - 1)});
}