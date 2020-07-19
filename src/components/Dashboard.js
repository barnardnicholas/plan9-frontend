import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostLog from "./PostLog";
import MasterControl from "./MasterControl";

export default function Dashboard() {
  return (
    <main>
      <section>
        <Container>
          <Row noGutters>
            <Col>
              <div className="dashboard-header">
                <h2>Dashboard</h2>
                <MasterControl />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row noGutters>
            <Col>
              <PostLog />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
