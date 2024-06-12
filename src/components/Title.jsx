const Title = () => {
  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="title">
        <h1>arxe.gallery</h1>
        <p>{formattedDate}</p>
      </div>
    </>
  );
};

export default Title;
