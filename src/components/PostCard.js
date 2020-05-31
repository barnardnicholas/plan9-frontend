import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function PostCard({ post }) {
  const {
    post_id,
    post_timestamp,
    post_status,
    post_image,
    post_screengrab,
    post_uploaded_image,
    post_sent_tweet,
    post_date,
  } = post;
  return (
    <li key={post_id}>
      <Container fluid>
        <Row>
          <Col>
            <h4>Date: {post_date || "-"}</h4>
          </Col>
          <Col>UID: {post_id || "-"}</Col>
          <Col>Status: {post_status || "-"}</Col>
          <Col>Screengrab: {post_screengrab ? "True" : "-"}</Col>
          <Col>Uploaded Image: {post_uploaded_image ? "True" : "-"}</Col>
          <Col>Sent Tweet: {post_sent_tweet ? "True" : "-"}</Col>
          <Col>
            <img src={`${post_image}`} width="80" height="auto" />
          </Col>
        </Row>
      </Container>
    </li>
  );
}
