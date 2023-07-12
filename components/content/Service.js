function Service({ name, description }) {

  return (
    <div className="post">
      <div className="description">{description}</div>
      <div className="text">
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default Service;
