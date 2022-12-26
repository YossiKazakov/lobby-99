export default function MemberList({ members }) {
    console.log("entered");
    if (members.length == 0){
        return(
        <div className="row">
        <h2 className="content none">There are no lobby members to shown</h2>
        </div>)
    }
    else{
        return(
        <div className="row">
            {members.map(member => {
                return (
                  <h1 key={member.id}> {member.name} </h1>)
            })}
        </div>)
    }
}