import Image from "next/image";
import "./marketgrid.css";
import { product_list } from "./marketgriddata";
import { nanoid } from "nanoid";

export default function marketgrid() {
  const finale_products = product_list.map((product) => (
    <GridItem id={nanoid()} product={product} />
  ));
  return <div className="grid-container">{finale_products}</div>;
}

export function GridItem({ product }) {
  return (
    <div className="grid_item column">
                            <div className="myimg">
                                        <Image
                                        src={product.img}
                                        alt="img"
                                        width={156}
                                        height={137}
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "center",
                                        }}
                                        />
                            </div>
                            
                            <div className="mytext column">

                                <h3 className="price-text">{product.price + "$"}</h3>
                                <h3 className="title-text">{product.title}</h3>
                                <h3 className="title-text">{product.location}</h3>
                            </div>
    </div>
  );
}
