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
      <Container>
        <Row>
          <Col>
            <p>
              <strong>Date:</strong> {post_date || "-"}
            </p>
            <p>
              <strong>UID:</strong> {post_id || "-"}
            </p>
            <p>
              <strong>Status:</strong> {post_status || "-"}
            </p>
          </Col>
          <Col>
            <p>
              <strong>Screengrab:</strong> {post_screengrab ? "True" : "-"}
            </p>
            <p>
              <strong>Uploaded Image:</strong>{" "}
              {post_uploaded_image ? "True" : "-"}
            </p>
            <p>
              <strong>Sent Tweet:</strong> {post_sent_tweet ? "True" : "-"}
            </p>
          </Col>
        </Row>
      </Container>

      {/*
            <img src={`${post_image}`} width="80" height="auto" />
          */}
    </li>
  );
}
