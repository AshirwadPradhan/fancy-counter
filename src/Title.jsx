function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit! Buy <b>Pro</b> for more!
        </span>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
}

export default Title;
