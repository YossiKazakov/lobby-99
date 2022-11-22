export default function DataIntro({ changeHandler }) {
    return (
      <div className="row">
        <div className="content">
              <div className="item control">
                <select id="data-filter" onChange={changeHandler}>
                  <option value="live">Live Scores</option>
                  <option value="future">Fixtures</option>
                  <option value="ended">Resultes</option>
                </select>
            </div>
              <div className="item control">
                <select id="data-sort" onChange={changeHandler}>
                  <option value="newest">Ascending</option>
                  <option value="oldest">Descending</option>
                </select>
            </div>
        </div>
      </div>
    )
  }
  