function Categories({ categories }) {
  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        {categories.map((cat) => (
          <button type="button" className="btn btn-primary">
            {cat.name}
          </button>
        ))}
      </div>
    </>
  );
}
export default Categories;
