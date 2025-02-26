import "./Card.css";

const Card = ({ header, body, footer }) => {
  return (
    <div className="my-card">
      <div className="card-header">{header}</div>
      <div className="card-body">{body}</div>
      <div className="card-footer">{footer}</div>
    </div>
  );
};

export default Card;
