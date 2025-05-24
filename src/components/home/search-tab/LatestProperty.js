/**
 * It takes in an array of objects and returns a section with a title and a row of property boxes
 * @returns The latest property listing is being returned.
 */
import { Col, Container, Row } from "reactstrap";
import PropertyBox from "../../elements/propertyBoxs/PropertyBox";

const LatestPropertySection = ({ value }) => {
  return (
    <section className='property-section'>
      <Container>
        <Row className=' ratio_55'>
          <Col>
            {/* <div className='title-2'>
              <h2>Última imóveis postados</h2>
              <p>Confira Nossos Últimos Lançamentos – As Melhores Opções para Você Encontrar o Seu Lar Ideal!</p>
            </div> */}
            <div className='title-1'>
              <span className='label label-gradient'>Venda</span>
              <h2>Últmos Imóveis Postado</h2>
              <hr />
            </div>
            <Row className='property-2 row column-space'>
              {value &&
                value.slice(0, 6).map((data, i) => (
                  <Col xl='4' md='6' className='wow fadeInUp' key={i}>
                    <PropertyBox data={data} />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LatestPropertySection;
