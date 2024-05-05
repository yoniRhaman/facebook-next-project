import "./product.css";

function ProductPage() {
  return (
    <div className="my-body row">
      <div className="imges center">
        <div className="main-img"></div>
        <div className="more-imges"></div>
      </div>
      <div className="details column">
        <div className="all-imges">
          <div className="img1"></div>
          <div className="img1"></div>
          <div className="img1"></div>
          <div className="img1"></div>
          <div className="img1"></div>
          <div className="img1"></div>
        </div>
        <div className="my-text column">
          <div className="title">ssss</div>
          <div className="price">ssss</div>
          <div className="location">ssss</div>
          <div className="description">
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic cently
            with de
          </div>
        </div>
        <button className="chat">sss</button>
      </div>
    </div>
  );
}

export default ProductPage;
