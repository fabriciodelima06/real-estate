import Link from "next/link";
import { Container, Row } from "reactstrap";

const NavbarFour = () => {
  return (
    <header className="header-1">
      <Container>
        <Row>
          <div className="col">
            <div className="menu">
              <div className="brand-logo pt-3">
                <Link href="/home/slider-filter-search">
                  <img src="/assets/images/logo/4.png" alt="" className="img-fluid for-light" />
                  <img src="/assets/images/logo/9.png" alt="" className="img-fluid for-dark" />
                </Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default NavbarFour;
