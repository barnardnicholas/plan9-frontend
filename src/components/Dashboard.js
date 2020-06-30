import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostLog from "./PostLog";
import Tweets from "./Tweets";
import MasterControl from "./MasterControl";
import UtilsPanel from "./UtilsPanel";

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
            <Col xs={12} md={6} lg={8}>
              <PostLog />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Tweets />
            </Col>
          </Row>
        </Container>
      </section>
      <UtilsPanel />
    </main>
  );
}
