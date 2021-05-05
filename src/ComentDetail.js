import faker from "faker";
export default function ComentDetail(props) {
  return (
    <div>
      <div className="ui container comments mt-4">
        <div className="comment">
          <a className="avatar" href="/">
            <img src={faker.image.avatar()} alt="Nothing" />
          </a>
          <div className="content">
            <a className="author" href="/" style={{ textDecoration: "none" }}>
              {props.author}
            </a>

            <div className="text">{props.comment}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
