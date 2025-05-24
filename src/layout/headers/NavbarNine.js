import Link from "next/link";
import { Container, Row } from "reactstrap";

const NavbarFour = () => {
  return (
    <header className="header-2">
      <Container>
        <Row>
          <div className="col">
            <div className="menu">
              <div className="brand-logo py-3">
                <Link href="/">
                  {/* <img src="/assets/images/logo/4.png" alt="" className="img-fluid for-light" /> */}
                  <img src="/assets/images/logo/9.png" alt="" />
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
