import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
      <Container>
          <Row>
            <a href="#">Compartilhar</a>
            <a href="#">Vender um igual</a>
          </Row>

          <Panel>
            <Column>
              <Gallery>
                <img alt="t-shirt" src={tshirtImage} />
              </Gallery>

              <Info />
            </Column>
              
            <Column>
              <ProductAction />
              <SellerInfo />

              <WarrantySection />
              <WarrantySection />
              <WarrantySection />
            </Column>
          </Panel>
      </Container>
  );
}

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garatina com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que esta esperando ou devolvemos o seu dinheiro
        </p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descricao</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet
      eleifend est, et vehicula mi vulputate quis. Nullam a vestibulum ex.
      Aliquam metus odio, cursus nec dui quis, vulputate faucibus ex. Sed
      molestie pellentesque ipsum nec fermentum. Fusce in vehicula mauris. Proin
      volutpat vulputate dui sed maximus. In in dui pretium, placerat augue id,
      accumsan ex. Quisque purus felis, venenatis ut vulputate varius, blandit
      nec tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Vestibulum tincidunt gravida lacus. Sed consectetur lacinia lectus vel
      porta. Phasellus tempor tellus turpis, eu bibendum tellus ullamcorper
      bibendum. Integer in convallis ligula. Etiam et convallis ante. Nam vitae
      ultrices ex, eu ornare diam. Donec id tellus nunc.
    
      <br />
      <br />
      Itens inclusos: <br />
      - 1x Caneca <br />
      - 1x Adesivo <br />
      - 1x Action Figure <br />
      - 1x Chaveiro <br />
      - 1x Pin <br />
      <br />
      Aliquam ultricies pharetra augue, id lacinia elit ornare at. Maecenas
      elementum purus varius magna tempus, quis dapibus urna cursus. Vestibulum
      dolor velit, pulvinar vitae ipsum id, iaculis varius ipsum. Nam sit amet
      lacus id purus pharetra porta. Vestibulum nisl lacus, scelerisque vitae
      bibendum ut, tincidunt vel ipsum. Proin elementum, leo ut condimentum porta,
      diam dui facilisis nunc, eu malesuada orci leo sit amet sem. Sed aliquam
      fringilla mauris, quis eleifend sem auctor non. Etiam nibh nisl, fermentum
      et nisl non, condimentum ullamcorper ex. Nulla ullamcorper nulla ac placerat
      tempor. Praesent bibendum gravida nulla a consectetur. Morbi cursus ante eu
      libero iaculis, in congue ante posuere. In fringilla, nisl quis hendrerit
      sollicitudin, neque elit scelerisque felis, vitae eleifend lorem arcu quis
      dolor. Proin pretium vulputate erat, in efficitur ante. Nam neque orci,
      tempor nec molestie id, aliquam maximus urna.
    </p>
  </Description>
);

export default Product;