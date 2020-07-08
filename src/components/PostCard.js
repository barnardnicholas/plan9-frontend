import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function PostCard({ post }) {
  const {
    filename,
    frame_number,
    frame_timestamp,
    image_number,
    log_date,
    log_output,
    log_timestamp,
    status,
  } = post;
  return (
    <li key={log_timestamp}>
      <Container>
        <Row>
          <Col>
            <p>
              <strong>Filename:</strong> {filename || "-"}
            </p>
            <p>
              <strong>Frame Number:</strong> {frame_number || "-"}
            </p>
            <p>
              <strong>Frame Timestamp:</strong> {frame_timestamp || "-"}
            </p>
          </Col>
          <Col>
            <p>
              <strong>Image Number:</strong> {image_number || "-"}
            </p>
            <p>
              <strong>Log Date:</strong> {log_date || "-"}
            </p>
            <p>
              <strong>Log Timestamp:</strong> {log_timestamp || "-"}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <strong>Status:</strong> {status || "-"}
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
