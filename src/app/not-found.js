"use client";

import { Container, Row } from "reactstrap";
import Link from "next/link";
import NavbarEight from "@/layout/headers/NavbarEight";

const NotFound = () => {
  return (
    <div>
      <NavbarEight />
      <section className="error-section small-section">
        <Container>
          <Row>
            <div className="col text-center not-found">
              <img src="/assets/images/inner-pages/2.svg" className="img-fluid" alt="" />
              <h2>Ops! Algo deu errado?</h2>
              <p className="font-roboto">Lamentamos, mas a página que você está procurando não existe ou foi removida. Verifique ou pesquise novamente.</p>
              <div className="btns">
                <Link href="/" className="btn btn-gradient">
                  go to home page
                </Link>
                {/* <a className="btn btn-dashed ms-2">Report problem</a> */}
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default NotFound;
