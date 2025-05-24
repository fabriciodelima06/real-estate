import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container } from "reactstrap";
import { DropdownInputFields } from "../../elements/DropdownInputFields";
import Dots from "./Dots";

const HomeBannerSection = () => {
  const [filterValues, setFilterValues] = useState({});
  const dispatch = useDispatch();
  const { propertyStatus, ...state } = useSelector((state) => state.inputsReducer);
  useEffect(() => {
    dispatch({ type: "propertyStatus", payload: "For Sell" });
  }, []);

  return (
    <section className="layout-home8 bg-img-2 ratio_landscape">
      <Container className="p-0">
        <div className="row m-0">
          <Col xl="7" lg="8">
            <div className="home-left-content">
              <div className="home-content">
                <h1 className="mt-0">
                  Encontre a casa dos seus
                  <br />
                  sonhos conosco
                </h1>
                <h6 className="font-roboto mb-0">Conte com Especialistas que Entendem do Assunto e Vão te Ajudar a Encontrar o Lar Ideal, no Seu Estilo e no Seu Ritmo.</h6>
              </div>
              <div className="search-with-tab">
                <ul className="nav nav-tabs" id="home-tab" role="tablist">
                  <li className="nav-item">
                    <a className={`nav-link ${propertyStatus === "For Sell" && "active"}`} onClick={() => dispatch({ type: "propertyStatus", payload: "For Sell" })}>
                      Comprar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${propertyStatus === "For Rent" && "active"}`} onClick={() => dispatch({ type: "propertyStatus", payload: "For Rent" })}>
                      Alugar
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="home-tabContent">
                  <div className="tab-pane fade show active active" id="sell">
                    <div className="row review-form gx-3">
                      <DropdownInputFields filterValues={filterValues} setFilterValues={setFilterValues} lg={4} sm={6} start={1} end={6} />
                      <Col lg="4" md="6">
                        <Link href="/listing/list-view/listing/left-sidebar" className="btn btn-gradient">
                          Search
                        </Link>
                      </Col>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl="5" lg="4">
            <div className="home-right-image">
              <img src="/assets/images/others/building.jpg" alt="" className="bg-img" />
            </div>
          </Col>
        </div>
        <div className="bg-dots">
          <Dots />
        </div>
      </Container>
    </section>
  );
};

export default HomeBannerSection;
