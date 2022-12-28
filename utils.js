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

    return years, months, days;
}