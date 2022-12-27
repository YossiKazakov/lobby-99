export default function Member({ member }) {
    return (
      <div className="row">
          <div className="content">
            <h1>היי, {member.name}<br/>
            ברוך הבא לסיכום השנה שהוכן במיוחד עבורך</h1>
          </div>
      </div>
    )
  }