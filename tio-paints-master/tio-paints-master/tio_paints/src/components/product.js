import { navItems } from "../config/navitems";
import NavBar from "./navbar";
import "../css/product.css";

const ProductSkeleton = (props) => {
  return (
    <div className="product">
      <div className="product-name">{props.name}</div>

      <div className="image">
        <img src={props.img} alt="Product" />
        {/* {props.img.map((i)=><img src={i} alt="Product" />)} */}
      </div>
      <div className="desc">
        <div className="subnames">
          {props.subname &&
            props.subname.map((item, index) => (
              <div className="subname" key={index}>
                {item}
              </div>
            ))}
        </div>
        <div className="description">{props.desc}</div>
        {/* <div className="rating">{props.rate}</div> */}
      </div>
    </div>
  );
};

const Product = (props) => {
  const products = navItems.filter((product) => product.name === props.name);
  return (
    <div>
      <NavBar />
      {products[0].img.map((i) => (
        <img id="img_desc" src={i} />
      ))}
      {products[0].child.map((prod) => (
        <div className="prod">
          <h2>
            Products for {products[0].name} - {prod.name}
          </h2>
          <SubProduct name={prod.name} />
        </div>
      ))}
    </div>
  );
};

const SubProduct = (props) => {
  let key;
  const products = navItems.map((item) => {
    if (item.child) {
      const filteredProducts = item.child.filter(
        (prod) => prod.name === props.name
      );
      if (filteredProducts.length > 0) {
        key = item.key;
        console.log(filteredProducts);
        return filteredProducts;
      }
    }
    return null;
  });
  return (
    <div>
      <img id="img_desc" src={products[key][0].img_desc} />
      <div className="prod">
        <h2>{props.name}</h2>
        {products[key][0].child ? (
          products[key][0].child.map((prod) => (
            <ProductSkeleton
              img={prod.img}
              name={prod.name}
              subname={
                prod.child ? prod.child.map((item) => <p>{item}</p>) : null
              }
              desc="description"
            />
          ))
        ) : (
          <h5>Nothing to show as of now!</h5>
        )}
      </div>
    </div>
  );
};

export { Product, SubProduct };
