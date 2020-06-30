import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "./Loading";

export default function UtilsPanel() {
  return (
    <Suspense fallback={Loading}>
      <section></section>
    </Suspense>
  );
}
