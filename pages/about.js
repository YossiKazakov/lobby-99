// A separate page, all rendered on the server not on the client
// As that is how Next.js works
export default function AboutPage() {
  return (
    <div className="row">
      <div className="item">
        <div className="content">
          This app shows live score, resultes and fixtures of the 2022/2023 season of the NBA
        </div>
      </div>
    </div>
  )
}
