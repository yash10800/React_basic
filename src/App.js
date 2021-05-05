import "./styles.css";
import ComentDetail from "./ComentDetail";
import Card from "./ApprovalCard";

function temp() {
  return "Comment Section";
}

export default function App() {
  const text = "Practice 1";
  return (
    <div className="App container">
      <h1>{text}</h1>
      <h2 className="mb-5">{temp()}</h2>
      <Card>
        <ComentDetail author="Yash Patel" comment="First Coment" />
      </Card>
      <Card>
        <ComentDetail author="Shubh Patel" comment="Second Coment" />
      </Card>
      <Card>
        <ComentDetail author="Shivansh Patel" comment="Third Coment" />
      </Card>
      <Card>
        <ComentDetail author="Het Patel" comment="Fourth Coment" />
      </Card>
      <Card>
        <ComentDetail author="Poojan Patel" comment="Fifth Coment" />
      </Card>
    </div>
  );
}
