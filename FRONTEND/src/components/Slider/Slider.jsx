import "./Slider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

export default function Slider() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      description={item.description}
    />
  ));

  return (
    <div className="App">
      <h3>Contrata tu artista y trae su musica en vivo</h3>
      <p>Aqui podras contratar artista,</p>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
